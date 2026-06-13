'use server';

export async function submitQuoteToSheet(data: {
  name: string;
  company: string;
  phone: string;
  email: string;
  productRequirement: string;
  message: string;
}) {
  const url = process.env.GOOGLE_SHEETS_URL;

  if (!url) {
    console.error("GOOGLE_SHEETS_URL environment variable is not defined");
    return {
      success: false,
      error: "Google Sheets URL is not configured in environment variables."
    };
  }

  try {
    const isSheetDB = url.includes('sheetdb.io');
    let bodyContent: string;

    if (isSheetDB) {
      // 1. Fetch the actual columns present in the Google Sheet
      const keysResponse = await fetch(`${url}/keys`);
      if (!keysResponse.ok) {
        throw new Error("Failed to fetch column headers from SheetDB.");
      }
      const keysData = await keysResponse.json();

      // Handle empty sheet error
      if (keysData.error) {
        throw new Error("Your Google Sheet is empty! Please write column names in the first row (e.g., Name, Company, Phone, Email, Product, Message, Timestamp) before submitting.");
      }

      // 2. Map form fields to the keys present in the Google Sheet
      const sheetRecord: Record<string, string> = {};
      const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

      // Match either Title Case or lowercase column names
      const exactMappings: Record<string, string> = {
        "Timestamp": timestamp,
        "Full Name": data.name,
        "Company Name": data.company,
        "Phone Number": data.phone,
        "Email Address": data.email,
        "Product Requirement": data.productRequirement,
        "Detailed Specifications / Message": data.message,
        "Message / Specifications": data.message,
      };

      const normalizedMappings: Record<string, string> = {
        "timestamp": timestamp,
        "date": timestamp,
        "name": data.name,
        "company": data.company,
        "phone": data.phone,
        "email": data.email,
        "productrequirement": data.productRequirement,
        "message": data.message,
      };

      if (Array.isArray(keysData)) {
        keysData.forEach((key: string) => {
          if (exactMappings[key] !== undefined) {
            sheetRecord[key] = exactMappings[key];
          } else {
            // Fallback to case-insensitive match
            const normalizedKey = key.toLowerCase().replace(/\s/g, '');
            if (normalizedMappings[normalizedKey] !== undefined) {
              sheetRecord[key] = normalizedMappings[normalizedKey];
            }
          }
        });
      }

      bodyContent = JSON.stringify({ data: [sheetRecord] });
    } else {
      bodyContent = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyContent,
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const resData = await response.json();
    
    if (resData.status === 'success' || resData.created !== undefined) {
      return { success: true };
    } else {
      return {
        success: false,
        error: resData.message || "Failed to save to Google Sheets"
      };
    }
  } catch (error) {
    console.error("Error submitting to Google Sheet:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit data to Google Sheet"
    };
  }
}
