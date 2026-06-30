import { Product } from '@/types';

export const CATEGORIES = [
  { id: 'rollers', name: 'Rollers', description: 'High-performance polyurethane rollers engineered for heavy-duty industrial applications, printing, and material processing.', imageUrl: '/images/pu_roller.jpg' },
  { id: 'wheels', name: 'Wheels', description: 'Durable, high-load capacity wheels and caster components designed to withstand severe wear and abrasion.', imageUrl: '/images/pu_castor_wheel.jpg' },
  { id: 'seals-components', name: 'Seals & Components', description: 'Precision custom-cast polyurethane seals, bushes, rods, sheets, and wear-resistant components.', imageUrl: '/images/pu_seal.jpg' },
  { id: 'pipeline-products', name: 'Pipeline Products', description: 'Pipeline cleaning pigs, sealing discs, and solid cast polyurethane products designed for the pipeline maintenance industry.', imageUrl: '/images/pipeline_pigs.png' },
  { id: 'industrial-solutions', name: 'Industrial Solutions', description: 'Heavy-duty polyurethane track pads, dampers, shock pads, and custom engineering wear solutions.', imageUrl: '/images/pu_track_pads.jpg' },
  { id: 'liners', name: 'Liners', description: 'Premium Polyurethane (PU) liners for granite and stone processing machinery, engineered to deliver exceptional abrasion resistance, impact strength, and operational durability.', imageUrl: '/images/socomac_single_liners.png' },
] as const;

export const PRODUCTS: Product[] = [
  // 1. INDUSTRIAL SOLUTIONS - PU Elastomer Screen
  {
    slug: 'pu-elastomer-screen',
    name: 'PU Elastomer Screen',
    category: 'industrial-solutions',
    description: 'High-strength screening panels made from wear-resistant polyurethane elastomer, offering superior classification efficiency and long service life in abrasive environments.',
    applications: ['Mining ore separation', 'Quarrying screen decks', 'Aggregate classification', 'Sand and gravel washing plants'],
    features: ['Outlasts steel wire and rubber screens in abrasive conditions', 'High flexibility prevents screen pegging and blinding', 'Custom aperture shapes and sizes available', 'Easy installation and modular replacement'],
    specifications: {
      'Material': 'Abrasion-resistant PU elastomer',
      'Hardness Range': '80 Shore A to 95 Shore A',
      'Aperture Sizes': 'Custom options to specification',
      'Panel Types': 'Modular, tensioned, or bolt-down systems'
    },
    industries: ['Mining Industry', 'Cement Industry', 'Engineering Industry'],
    imageUrl: '/images/elastomer_screen.jpg'
  },
  // 2. ROLLERS - V Rollers
  {
    slug: 'v-rollers',
    name: 'V Rollers',
    category: 'rollers',
    description: 'Heavy-duty polyurethane V-rollers (also known as hourglass or guide rollers) engineered for guiding, centering, and conveying pipes, tubes, and cylindrical profiles in demanding industrial operations.',
    applications: ['Pipe conveying systems', 'Tube manufacturing lines', 'Cable guiding equipment', 'Coiled tubing rigs', 'Linear profile guidance systems'],
    features: ['Deep V-groove profile keeps cylinders and pipes perfectly centered', 'Outstanding resistance to high abrasion, cuts, and tears', 'High load capacity prevents flat-spotting under continuous pressure', 'Protects pipe surfaces from damage, noise, and metal-on-metal wear'],
    specifications: {
      'Hardness Range': '70 Shore A to 98 Shore A',
      'Temperature Limits': '-35°C to +80°C',
      'Load Capacity': 'Up to 5 Tons per roller',
      'Standard Groove Angle': '90° or 120° custom profiles',
      'Core Material': 'Steel, Stainless Steel, or Aluminum with high-strength bonding'
    },
    industries: ['Steel Industry', 'Oil & Gas', 'Material Handling', 'Engineering Industry'],
    imageUrl: '/images/v_rollers.jpg'
  },
  // 3. WHEELS - Caster Wheels
  {
    slug: 'caster-wheels',
    name: 'Caster Wheels',
    category: 'wheels',
    description: 'High-performance polyurethane caster wheels mounted in heavy-duty steel brackets, available in swivel, fixed, and braking configurations for industrial machinery.',
    applications: ['Mobile workbenches', 'Heavy equipment casters', 'Automated Guided Vehicles (AGVs)', 'Warehouse racks'],
    features: ['Double ball-race swivel head for smooth rotation', 'Integrated foot brake options', 'Sealed bearings for dust protection', 'Shock-absorbing polyurethane tread'],
    specifications: {
      'Hardness Range': '85 Shore A to 98 Shore A',
      'Wheel Diameters': '75mm to 300mm',
      'Load Capacity': 'Up to 1,500 kg per caster',
      'Swivel Radius': 'Optimized for high maneuvering'
    },
    industries: ['Material Handling', 'Logistics', 'Textile Industry', 'Cement Industry'],
    imageUrl: '/images/pu_castor_wheel.jpg'
  },
  // 4. SEALS & COMPONENTS - PU Seals
  {
    slug: 'pu-seals',
    name: 'PU Seals',
    category: 'seals-components',
    description: 'High-performance polyurethane hydraulic and pneumatic seals, U-cups, rod seals, piston seals, and wiper rings providing zero-leak performance and exceptional wear life.',
    applications: ['Hydraulic cylinders', 'Pneumatic actuators', 'Earthmoving equipment hydraulics', 'Industrial presses'],
    features: ['Excellent extrusion resistance under high pressure', 'Highly resistant to hydraulic mineral oils and greases', 'Double lip design prevents dirt ingress', 'Easy installation in closed grooves'],
    specifications: {
      'Hardness Range': '90 Shore A to 98 Shore A',
      'Operating Pressure': 'Up to 400 bar (Hydraulic)',
      'Speed': 'Up to 0.5 m/s',
      'Fluid Compatibility': 'Mineral oils, biodegradable fluids'
    },
    industries: ['Engineering Industry', 'Cement Industry', 'Mining Industry', 'Steel Industry'],
    imageUrl: '/images/pu_seal.jpg'
  },
  // 5. INDUSTRIAL SOLUTIONS - PU Coil Floor Saddles
  {
    slug: 'coil-floor-saddles',
    name: 'PU Coil Floor Saddles',
    category: 'industrial-solutions',
    description: 'Strong polyurethane supports designed to hold and protect heavy metal coils on factory floors, preventing slipping, damage, and floor scratches.',
    applications: ['Steel processing mills', 'Aluminum coil storage', 'Coil service centers', 'Warehouse floor storage'],
    features: ['Heavy load-carrying capacity and high durability', 'Prevents metal coils from slipping or rolling', 'Protects factory floors from heavy impact and scratches', 'Custom sizes and shapes to fit any coil diameter'],
    specifications: {
      'Material': 'High-performance polyurethane elastomer',
      'Load Capacity': 'Heavy load capacity suitable for multi-ton metal coils',
      'Design': 'V-shape or contoured profile for secure positioning',
      'Durability': 'Superior oil, chemical, and wear resistance'
    },
    industries: ['Steel Industry', 'Aluminum Industry', 'Manufacturing', 'Material Handling'],
    imageUrl: '/images/coil_floor_saddles.jpg'
  },
  // 6. SEALS & COMPONENTS - PU Rods
  {
    slug: 'pu-rods',
    name: 'PU Rods',
    category: 'seals-components',
    description: 'Solid cast polyurethane rods in various diameters and lengths, serving as high-durability raw stock for machining custom seals, prototypes, and tooling components.',
    applications: ['Custom machining parts', 'Press tool buffers', 'Springs and dampers', 'Prototype design modeling'],
    features: ['Easy to machine on standard lathes and CNCs', 'Excellent concentricity and consistent hardness throughout', 'No air bubbles or voids (vacuum-cast)', 'High impact resistance'],
    specifications: {
      'Hardness Range': '60 Shore A to 75 Shore D',
      'Standard Lengths': '300mm, 500mm, 1000mm',
      'Diameter Range': '20mm to 200mm',
      'Available Colours': 'Red, Orange, Yellow, Transparent',
      'Tolerance': '+0.5mm / -0.0mm'
    },
    industries: ['Engineering Industry', 'Manufacturing', 'Tooling'],
    imageUrl: '/images/pu_rod.jpg'
  },
  // 7. SEALS & COMPONENTS - PU Sheets
  {
    slug: 'pu-sheets',
    name: 'PU Sheets',
    category: 'seals-components',
    description: 'High-wear cast polyurethane sheets and liners used for lining chutes, hoppers, silos, and tables to protect steel surfaces from severe abrasion and noise.',
    applications: ['Chute lining', 'Silo wall protection', 'Concrete mixer liners', 'Gasket cutting raw material'],
    features: ['Reduces noise levels by up to 50% compared to steel', 'Smooth surface prevents material sticking and buildup', 'Available with steel mesh or fabric backing for mechanical fastening', 'Extremely cost-effective wear solution'],
    specifications: {
      'Hardness Range': '65 Shore A to 95 Shore A',
      'Standard Dimensions': '1000x2000mm, 1200x2400mm',
      'Thickness Range': 'Starts from 10mm',
      'Available Colours': 'Red, Orange, Yellow, Transparent',
      'Abrasion Resistance': '4x better than steel'
    },
    industries: ['Cement Industry', 'Mining Industry', 'Material Handling', 'Steel Industry'],
    imageUrl: '/images/pu_sheet.jpg'
  },
  // 8. INDUSTRIAL SOLUTIONS - Track Pads
  {
    slug: 'track-pads',
    name: 'Track Pads',
    category: 'industrial-solutions',
    description: 'Bolt-on and clip-on polyurethane track pads for road paving machinery and excavators, providing traction while protecting asphalt and concrete roads from damage.',
    applications: ['Asphalt paving machines', 'Tracked excavators', 'Directional drilling rigs', 'Cold planers'],
    features: ['Heavy-duty steel core insert for rigid bolt-on attachment', 'Premium polyurethane compound resists road wear and chipping', 'Specially textured surface for wet traction', 'Quick replacements save labor'],
    specifications: {
      'Hardness Range': '85 Shore A to 90 Shore A',
      'Tear Strength': '110 kN/m',
      'Insert Material': 'High tensile steel plate',
      'Operating life': 'Average 1,500 paving hours'
    },
    industries: ['Engineering Industry', 'Construction', 'Material Handling'],
    imageUrl: '/images/pu_track_pads.jpg'
  },

  // 10. SEALS & COMPONENTS - Scraper Blades
  {
    slug: 'scraper-blades',
    name: 'Scraper Blades',
    category: 'seals-components',
    description: 'Polyurethane scraper blades and belt cleaners for conveyor systems, designed to clean material carryback while protecting expensive rubber belts from damage.',
    applications: ['Conveyor belt primary cleaners', 'Secondary belt scrapers', 'Snow plow edges', 'Squeegee blades'],
    features: ['Low coefficient of friction prevents belt wear', 'Excellent elastic memory maintains blade-to-belt pressure', 'Molded with mounting tracks or metal inserts', 'Resistant to water and sticky materials'],
    specifications: {
      'Hardness Range': '75 Shore A to 90 Shore A',
      'Tear Strength': '90 kN/m',
      'Length Options': 'Custom cut up to 3000mm',
      'Mounting Option': 'Steel track, plain holes, polyurethane track'
    },
    industries: ['Cement Industry', 'Mining Industry', 'Material Handling', 'Steel Industry'],
    imageUrl: '/images/scraper_blade.jpg'
  },
  // 11. WHEELS - Zero Crush Wheel
  {
    slug: 'zero-crush-wheel',
    name: 'Zero Crush Wheel',
    category: 'wheels',
    description: 'Specially designed polyurethane wheels featuring a flexible, hollowed-out profile to distribute pressure evenly and handle delicate materials without crushing.',
    applications: ['Corrugated box manufacturing', 'Cardboard and paper converting', 'Packaging lines', 'Feeding sections of printing presses'],
    features: ['Hollow spokes/concentric design for shock absorption', 'Prevents crushing of delicate flutes and sheets', 'High coefficient of friction for positive feeding', 'Non-marking polyurethane compound protects surfaces'],
    specifications: {
      'Material': 'High-rebound soft polyurethane',
      'Hardness Range': '45 Shore A to 75 Shore A',
      'Sizes': 'Available in all standard and custom dimensions',
      'Structure': 'Hollow spoke design for maximum deflection'
    },
    industries: ['Packaging Industry', 'Printing Industry', 'Manufacturing'],
    imageUrl: '/images/zero_crush_wheel.jpg'
  },

  // 13. LINERS - SOCOMAC Single Groove Liner
  {
    slug: 'socomac-single-groove-liner',
    name: 'SOCOMAC Single Groove Liner',
    category: 'liners',
    description: 'We manufacture premium Polyurethane (PU) Liners for granite and stone processing machinery, engineered to deliver exceptional abrasion resistance, impact strength, and operational durability. Our SOCOMAC single groove liners provide effective material guidance, wear protection, and operational stability in granite slab production and processing lines.',
    applications: [
      'SOCOMAC stone processing equipment',
      'Material guidance and wear protection',
      'Granite slab production and processing lines'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Available Sizes': '2.2 Mtrs to 2.9 Mtrs',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/socomac_single_liners.png'
  },
  // 14. LINERS - SOCOMAC Double Groove Liner
  {
    slug: 'socomac-double-groove-liner',
    name: 'SOCOMAC Double Groove Liner',
    category: 'liners',
    description: 'Specially engineered double groove polyurethane liners for SOCOMAC stone processing equipment. These liners provide dual guidance pathways, outstanding wear protection, and exceptional longevity under demanding production workloads.',
    applications: [
      'SOCOMAC stone processing equipment',
      'Double-groove material guidance systems',
      'Granite slab production and processing lines'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Available Sizes': '2.2 Mtrs to 2.9 Mtrs',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/socomac_double_liner.jpg'
  },
  // 15. LINERS - SOCOMAC Double Groove Liner with Safety
  {
    slug: 'socomac-double-groove-liner-with-safety',
    name: 'SOCOMAC Double Groove Liner with Safety',
    category: 'liners',
    description: 'Double groove polyurethane liners with integrated safety features designed for SOCOMAC machinery. These components provide an extra safety margin to prevent damage to machine pulleys and components under peak loads and severe operating environments.',
    applications: [
      'SOCOMAC stone processing equipment',
      'Double-groove material guidance systems with extra safety margin',
      'Granite slab production and processing lines'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Available Sizes': '2.2 Mtrs to 2.9 Mtrs',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/socomac_double_with_safety_liner.jpg'
  },
  // 16. LINERS - GASPARI Machine Liners
  {
    slug: 'gaspari-machine-liners',
    name: 'GASPARI Machine Liners',
    category: 'liners',
    description: 'Polyurethane liners manufactured for GASPARI machinery. These liners are engineered for pulley and wheel assemblies operating under high-load conditions where dimensional accuracy, wear resistance, and long service life are critical.',
    applications: [
      'GASPARI stone processing machinery',
      'Pulley and wheel assemblies',
      'High-load operating environments',
      'Tension wheel and guide systems'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Available Products': '1G Ideal Pulley Liner (3.9 Mtrs), 3G Guide Pulley Liner (2.2 Mtrs), Tension Wheel Liner (3.3 Mtrs)',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/gaspari_machine_liner.png'
  },
  // 17. LINERS - GASPARI 1G Ideal Pulley Liner (3.9 Mtrs)
  {
    slug: 'gaspari-1g-ideal-pulley-liner-3-9-mtrs',
    name: 'GASPARI 1G Ideal Pulley Liner (3.9 Mtrs)',
    category: 'liners',
    description: 'Premium Polyurethane (PU) 1G Ideal Pulley Liner engineered for GASPARI stone processing machinery. Designed to operate under high-load conditions, providing outstanding dimensional accuracy, wear resistance, and long service life in granite slab production lines.',
    applications: [
      'GASPARI stone processing machinery',
      '1G Ideal Pulley assemblies',
      'High-load stone cutting operations',
      'Material guidance and wear protection'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Size': '3.9 Mtrs',
      'Machine Compatibility': 'GASPARI Machinery',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/gaspari_1g_ideal_pulley_3_9_mtrs.jpg'
  },
  // 18. LINERS - GASPARI 3G Guide Pulley Liner (2.2 Mtrs)
  {
    slug: 'gaspari-3g-guide-pulley-liner-2-2-mtrs',
    name: 'GASPARI 3G Guide Pulley Liner (2.2 Mtrs)',
    category: 'liners',
    description: 'Premium Polyurethane (PU) 3G Guide Pulley Liner engineered for GASPARI stone processing machinery. These liners provide precise guidance, component protection, and exceptional longevity under demanding production workloads.',
    applications: [
      'GASPARI stone processing machinery',
      '3G Guide Pulley assemblies',
      'Granite slab production and processing lines',
      'Material guidance and wear protection'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Size': '2.2 Mtrs',
      'Machine Compatibility': 'GASPARI Machinery',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/gaspari_3g_guide_pulley_2_2_mtrs.jpg'
  },
  // 19. LINERS - GASPARI Tension Wheel Liner (3.3 Mtrs)
  {
    slug: 'gaspari-tension-wheel-liner-3-3-mtrs',
    name: 'GASPARI Tension Wheel Liner (3.3 Mtrs)',
    category: 'liners',
    description: 'Premium Polyurethane (PU) Tension Wheel Liner engineered for GASPARI stone processing machinery. Designed to withstand continuous tension and high-load mechanical stress, ensuring optimal pulley alignment and reducing maintenance downtime.',
    applications: [
      'GASPARI stone processing machinery',
      'Tension wheel assemblies',
      'High-load operating environments',
      'Material guidance and wear protection'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Size': '3.3 Mtrs',
      'Machine Compatibility': 'GASPARI Machinery',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/gaspari_tension_wheel_liners_3_3_mtrs.jpg'
  },
  // 20. LINERS - BRETON Machine Liners
  {
    slug: 'breton-machine-liners',
    name: 'BRETON Machine Liners',
    category: 'liners',
    description: 'Polyurethane liners suitable for BRETON stone processing systems. These liners enhance component protection, improve material handling performance, and contribute to reduced operational downtime.',
    applications: [
      'BRETON stone processing systems',
      'Component protection and wear reduction',
      'Free wheel, drum/guide wheel, and tension wheel assemblies',
      'Material handling performance improvement'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Available Products': 'Free Wheel Liner (3.3 Mtrs), Drum / Guide Wheel Liner (3.3 Mtrs), Tension Wheel Liner (3.3 Mtrs)',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/breton_machine_liner.png'
  },
  // 21. LINERS - BRETON Free Wheel Liner (3.3 Mtrs)
  {
    slug: 'breton-free-wheel-liner-3-3-mtrs',
    name: 'BRETON Free Wheel Liner (3.3 Mtrs)',
    category: 'liners',
    description: 'Premium Polyurethane (PU) Free Wheel Liner suitable for BRETON stone processing systems. Engineered to enhance component protection, reduce friction and wear, and contribute to lower operational downtime.',
    applications: [
      'BRETON stone processing systems',
      'Free wheel assemblies',
      'Component protection and wear reduction',
      'Material handling performance improvement'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Size': '3.3 Mtrs',
      'Machine Compatibility': 'BRETON Machinery',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/breton_free_wheel_liners_3_3_mtrs.jpg'
  },
  // 22. LINERS - BRETON Guide Wheel Liner (3.3 Mtrs)
  {
    slug: 'breton-guide-wheel-liner-3-3-mtrs',
    name: 'BRETON Guide Wheel Liner (3.3 Mtrs)',
    category: 'liners',
    description: 'Premium Polyurethane (PU) Guide Wheel Liner designed for BRETON stone processing systems. Delivers exceptional abrasion resistance and structural integrity under dynamic loads for precise slab processing guidance.',
    applications: [
      'BRETON stone processing systems',
      'Drum and guide wheel assemblies',
      'Component protection and wear reduction',
      'Material handling performance improvement'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Size': '3.3 Mtrs',
      'Machine Compatibility': 'BRETON Machinery',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/breton_guide_wheel_liners_3_3_mtrs.jpg'
  },
  // 23. LINERS - BRETON Tension Wheel Liner (3.3 Mtrs)
  {
    slug: 'breton-tension-wheel-liner-3-3-mtrs',
    name: 'BRETON Tension Wheel Liner (3.3 Mtrs)',
    category: 'liners',
    description: 'Premium Polyurethane (PU) Tension Wheel Liner suitable for BRETON stone processing systems. Engineered to absorb dynamic mechanical stress, prevent slip, and protect tension assemblies in continuous production cycles.',
    applications: [
      'BRETON stone processing systems',
      'Tension wheel assemblies',
      'Component protection and wear reduction',
      'Material handling performance improvement'
    ],
    features: [
      'High Abrasion Resistance',
      'Excellent Impact Strength',
      'Superior Wear Protection',
      'Precision Fitment',
      'Long Service Life',
      'Reduced Maintenance Costs',
      'Premium Grade Polyurethane Formulation'
    ],
    specifications: {
      'Size': '3.3 Mtrs',
      'Machine Compatibility': 'BRETON Machinery',
      'Material': 'Premium Grade Polyurethane Formulation',
      'Customization': 'Manufactured according to customer drawings, physical samples, and machine specifications',
      'Hardness & Profiles': 'Custom profiles, lengths, colours, and hardness grades can be produced',
      'Resistance Properties': 'Highly resistant to water, slurry, abrasive mineral particles, and dynamic mechanical stress'
    },
    industries: ['Granite Processing Industry', 'Stone Processing Industry', 'Engineering Industry'],
    imageUrl: '/images/breton_tension_wheel_liners_3_3_mtrs.jpg'
  },

  // --- OTHER PRODUCTS ---
  // ROLLERS
  {
    slug: 'printing-rollers',
    name: 'Printing Rollers',
    category: 'rollers',
    description: 'Precision-ground polyurethane printing rollers engineered for ink transfer consistency, solvent resistance, and minimal swelling in modern high-speed printing presses.',
    applications: ['Offset printing presses', 'Flexographic printing lines', 'Gravure printing machines', 'Packaging production lines'],
    features: ['Excellent resistance to ink solvents and chemicals', 'Maintains consistent hardness under high pressure', 'Precision ground finish to tight tolerances', 'Low compression set and high rebound resilience'],
    specifications: {
      'Hardness Range': '20 Shore A to 95 Shore A',
      'Temperature Limits': '-30°C to +80°C',
      'Tensile Strength': '35 MPa',
      'Elongation at Break': '450%',
      'Standard Core Material': 'Steel, Stainless Steel, Aluminum'
    },
    industries: ['Printing Industry', 'Packaging Industry', 'Paper & Pulp Industry'],
    imageUrl: '/images/pu_roller.jpg'
  },

  // WHEELS

  {
    slug: 'load-wheels',
    name: 'Load Wheels',
    category: 'wheels',
    description: 'Heavy duty polyurethane load-bearing wheels engineered for high static loads, preventing flat-spotting when equipment sits loaded for extended periods.',
    applications: ['Heavy machinery transport dollies', 'Telescopic crane outrigger pads', 'Overhead conveyor carriers', 'Automated logistics systems'],
    features: ['Virtually immune to flat-spotting under load', 'Extreme resistance to cut and tear propagation', 'Excellent core adhesion', 'Quiet, low-vibration operation'],
    specifications: {
      'Hardness Range': '95 Shore A to 60 Shore D',
      'Static Load Capacity': 'Up to 10,000 kg',
      'Tear Strength': '80 kN/m',
      'Deformation Rate': '< 2.5% under max static load'
    },
    industries: ['Material Handling', 'Engineering Industry', 'Mining Industry'],
    imageUrl: '/images/pu_wheels.png'
  },

  // SEALS & COMPONENTS
  {
    slug: 'pu-bushes',
    name: 'PU Bushes',
    category: 'seals-components',
    description: 'Custom molded polyurethane bushings for automotive suspension, vibratory screens, and industrial machinery, offering superior vibration damping and wear life.',
    applications: ['Suspension links', 'Vibratory feeder mounts', 'Industrial machinery pivot joints', 'Conveyor alignment arms'],
    features: ['Replaces traditional rubber for 4x longer life', 'Eliminates squeaking and friction noise', 'Resistant to salt, grit, and road grime', 'Maintains alignment and geometry under load'],
    specifications: {
      'Hardness Range': '70 Shore A to 95 Shore A',
      'Tensile Strength': '38 MPa',
      'Tear Resistance': '75 N/mm',
      'Elastic Recovery': '98%'
    },
    industries: ['Textile Industry', 'Cement Industry', 'Engineering Industry', 'Mining Industry'],
    imageUrl: '/images/pu_seals.png'
  },

  // PIPELINE PRODUCTS
  {
    slug: 'foam-pigs',
    name: 'Foam Pigs',
    category: 'pipeline-products',
    description: 'Polyurethane foam pipeline pigs in low, medium, and high densities, designed for pipeline drying, sweeping, cleaning, and batching operations.',
    applications: ['Pipeline dewatering', 'Product recovery batching', 'Internal pipeline cleaning', 'Pipeline diameter testing'],
    features: ['High flexibility allows travel through short-radius elbows', 'Available with polyurethane coating or abrasive wire brush straps', 'Excellent liquid absorption for drying', 'Compressed shipping sizes available'],
    specifications: {
      'Density Range': '30 kg/m³ to 150 kg/m³',
      'Outer Coating': 'Polyurethane criss-cross pattern or full coat',
      'Sizes': '2" to 48" pipeline diameters',
      'Expansion Limit': 'Up to 30% reduction in narrow spots'
    },
    industries: ['Pipeline Industry', 'Chemical Industry', 'Water Supply'],
    imageUrl: '/images/pipeline_pigs.png'
  },
  {
    slug: 'directional-pigs',
    name: 'Directional Pigs',
    category: 'pipeline-products',
    description: 'Bidirectional and directional solid cast polyurethane pipeline pigs, equipped with guiding and sealing discs to scrape and clean pipelines efficiently.',
    applications: ['Pipeline commissioning', 'Condensate removal', 'Paraffin and scale scraping', 'Multi-product separation'],
    features: ['Sturdy steel body with cast polyurethane parts', 'Interchangeable cups and discs', 'Bidirectional travel permits retrieval from entry point', 'Fitted with transmitter cages for tracking'],
    specifications: {
      'Disc Material': 'Premium wear-resistant polyurethane',
      'Body Material': 'Carbon Steel, Stainless Steel, or Solid Polyurethane',
      'Pressure Rating': 'Operates in high-pressure gas/oil lines',
      'Sizes': '4" to 60" sizes'
    },
    industries: ['Pipeline Industry', 'Chemical Industry', 'Oil & Gas'],
    imageUrl: '/images/pipeline_pigs.png'
  },
  {
    slug: 'solid-cast-urethane-pigs',
    name: 'Solid Cast Urethane Pigs',
    category: 'pipeline-products',
    description: 'One-piece solid cast polyurethane pipeline pigs containing flexible cups or discs, ideal for small to medium diameter piping system maintenance.',
    applications: ['Industrial chemical lines', 'Water pipelines', 'Refinery piping systems', 'Food processing lines'],
    features: ['Single-cast design eliminates metal bolts or backing plates', 'Excellent sealability due to flexible cup design', 'Completely corrosion-resistant body', 'Passes through multi-dimensional pipelines'],
    specifications: {
      'Hardness Range': '70 Shore A to 85 Shore A',
      'Cup Options': 'Conical cups, sealing discs',
      'Sizes': '2" to 12" diameter lines',
      'Standard Length': '1.5 times the outer diameter'
    },
    industries: ['Pipeline Industry', 'Chemical Industry', 'Engineering Industry'],
    imageUrl: '/images/pipeline_pigs.png'
  },
  {
    slug: 'sealing-discs',
    name: 'Sealing Discs',
    category: 'pipeline-products',
    description: 'Replacement polyurethane sealing discs, guide discs, and cups for pipeline pigs, providing high sealing efficiency and wear life in oil and gas pipelines.',
    applications: ['Pipeline pig assembly', 'Custom built scraper pigs', 'Hydrotesting isolations', 'Dewatering plugs'],
    features: ['Strict dimensional tolerances for precise pipeline fit', 'Superior resistance to sour gas, crude oil, and pipeline chemicals', 'Optimal stiffness to seal and guide without binding', 'High tear resistance'],
    specifications: {
      'Hardness Range': '75 Shore A to 85 Shore A',
      'Disc Thickness': '6mm to 40mm depending on size',
      'Temperature Range': '-20°C to +90°C',
      'Wear Coefficient': 'Very low dynamic friction'
    },
    industries: ['Pipeline Industry', 'Chemical Industry', 'Engineering Industry'],
    imageUrl: '/images/pipeline_pigs.png'
  },

  // INDUSTRIAL SOLUTIONS
  {
    slug: 'dampers',
    name: 'Dampers',
    category: 'industrial-solutions',
    description: 'Custom-designed polyurethane dampers and vibration isolators built to absorb heavy impacts, protect machinery, and reduce decibel levels in factories.',
    applications: ['Drop hammers', 'Punch press buffers', 'Vibratory screen mounts', 'End-of-travel stops'],
    features: ['High energy absorption with minimal heat buildup', 'Resistant to oils, grease, ozone, and weathering', 'Custom shapes, threads, and metal attachments available', 'Outperforms rubber under high cycle loads'],
    specifications: {
      'Hardness Range': '50 Shore A to 70 Shore D',
      'Energy Absorption': 'Up to 70% of impact energy',
      'Max Force Capacity': 'Up to 500 kN',
      'Metal Thread Options': 'M8 to M36 bolts cast-in'
    },
    industries: ['Engineering Industry', 'Cement Industry', 'Steel Industry', 'Mining Industry'],
    imageUrl: '/images/industrial_solutions.png'
  },
  {
    slug: 'shock-pads',
    name: 'Shock Pads',
    category: 'industrial-solutions',
    description: 'Heavy duty polyurethane shock absorbing pads utilized in steel mills and forging facilities to absorb immense loads and protect foundation structures.',
    applications: ['Forging hammer pads', 'Coil storage cradle liners', 'Heavy crane rail base pads', 'Railway tie pads'],
    features: ['Extremely high load-bearing capacity', 'Excellent creep resistance prevents permanent deformation', 'Substantially reduces building vibration and structural damage', 'Custom thickness and dimensions'],
    specifications: {
      'Hardness Range': '80 Shore A to 95 Shore A',
      'Compressive Strength': 'Up to 60 MPa',
      'Vibration Reduction': 'Reduces structural shock by up to 80%',
      'Thickness Options': '10mm to 100mm'
    },
    industries: ['Steel Industry', 'Engineering Industry', 'Cement Industry', 'Mining Industry'],
    imageUrl: '/images/industrial_solutions.png'
  },
  {
    slug: 'hydrocyclones',
    name: 'Hydrocyclones',
    category: 'industrial-solutions',
    description: 'Cast polyurethane hydrocyclones and separator liners used in mining, sand washing, and slurry processing to separate particles based on size and weight.',
    applications: ['Mineral slurry separation', 'Sand washing plants', 'Coal processing lines', 'Starch processing'],
    features: ['Outlasts steel or ceramic liners in abrasive slurries', 'Smooth internal bore optimizes cyclone flow patterns', 'Modular design for quick replacement of worn cone sections', 'High chemical resistance to chemicals and flotation reagents'],
    specifications: {
      'Hardness Range': '80 Shore A to 90 Shore A',
      'Operating PH Range': '2 to 12',
      'Particle Cut Point': 'From 10 microns to 150 microns',
      'Internal Finish': 'Super smooth mold finish'
    },
    industries: ['Mining Industry', 'Cement Industry', 'Engineering Industry'],
    imageUrl: '/images/industrial_solutions.png'
  },
  {
    slug: 'custom-cast-parts',
    name: 'Custom Cast Parts',
    category: 'industrial-solutions',
    description: 'Bespoke custom cast polyurethane components manufactured precisely according to drawings, samples, or industrial specifications for unique wear-resistance requirements.',
    applications: ['Custom gears and star wheels', 'Protective sleeves and sleeves', 'Industrial scraper squeegees', 'Special machinery components'],
    features: ['Mold design and engineering support in-house', 'Casting of complex geometries and thin-walled parts', 'Overmolding on steel, brass, aluminum, and plastics', 'Wide choice of colors and hardness formulations'],
    specifications: {
      'Hardness Range': '10 Shore A to 85 Shore D',
      'Max Casting Weight': 'Up to 150 kg per piece',
      'Metal Bonding': 'Chemical adhesive bonding system',
      'Tolerance': 'ISO standard tolerances or better'
    },
    industries: ['Engineering Industry', 'Textile Industry', 'Cement Industry', 'Steel Industry', 'Printing Industry'],
    imageUrl: '/images/industrial_solutions.png'
  }
];
