export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectSection {
  title: string;
  subtitle?: string;
  content: string;
  bulletPoints?: string[];
  callout?: {
    type: 'spec' | 'note' | 'formula';
    title: string;
    text: string;
  };
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  organization: string;
  category: string;
  timeline: string;
  role: string;
  summary: string;
  heroImage?: string;
  images?: Array<{ url: string; caption: string }>;
  has3dModel: boolean;
  modelUrl?: string;
  tags: string[];
  specs: ProjectSpec[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    slug: "baja-rear-control-arms",
    number: "01",
    title: "Rear Suspension Control Arms & Links",
    shortTitle: "Rear Control Arms",
    organization: "Cornell Baja SAE Racing",
    category: "Vehicle Suspension & FEA",
    timeline: "Nov 2025 – Present",
    role: "Mechanical Engineer — Suspension Subteam",
    summary: "Heavy-duty aluminum and alloy steel rear control arms engineered for a high-travel independent rear suspension, connecting rear uprights to the chassis roll cage and supporting dynamic shock piston loads.",
    has3dModel: false,
    tags: ["Ansys Mechanical", "FEA", "SolidWorks 2026", "CNC Machining", "Manual Lathe", "Kinematics", "Suspension"],
    specs: [
      { label: "Suspension Architecture", value: "Multi-Link Independent Rear Suspension (IRS)" },
      { label: "Primary Materials", value: "4130 Chromoly Steel Tubes + 6061-T6 Aluminum Clevises" },
      { label: "Bearings & Articulation", value: "Aurora High-Misalignment Spherical Bearings" },
      { label: "Simulation & FEA", value: "Ansys Mechanical 2025 Structural Solver" },
      { label: "Critical Load Case", value: "3G Bump + 2G Lateral Cornering Combined" },
      { label: "Target Factor of Safety", value: "FoS ≥ 2.2 against yield under peak dynamic shock" },
      { label: "Fabrication Methods", value: "CNC Milling, Manual Lathe Turning, Precision Fixturing" },
      { label: "Protective Finish", value: "Heat-Treated & Mil-Spec Type II Anodized" },
    ],
    sections: [
      {
        title: "01. Suspension Kinematics & Structural Mandate",
        subtitle: "Preserving dynamic camber and roll center curves over 12 inches of travel",
        content: "On a single-seat Baja SAE race car, the rear suspension arms absorb continuous multi-axis impact forces: vertical landing shock from 6-foot jumps, severe lateral scrub during high-speed corner drifts, and driving torque. The links must maintain strict wheel alignment without plastic deformation or fatigue failure.",
        bulletPoints: [
          "Integrated shock piston mount tabs directly into the control arm clevis assembly to optimize motion ratios and reduce unsprung weight.",
          "Spherical bearings equipped with custom lathe-turned misalignment spacers provide 28 degrees of angular articulation without binding.",
          "Lightweighting achieved via progressive wall-thickness optimization and CNC pocketing of 6061-T6 aluminum clevises."
        ]
      },
      {
        title: "02. Ansys Mechanical FEA & Structural Validation",
        subtitle: "Simulating combined bump, cornering, and reverse-impact load cases",
        content: "Using Ansys Mechanical, structural static and transient load simulations were executed on the control arm weldment assembly. Boundary conditions constrained the spherical chassis pivot points while applying combined dynamic forces at the outboard upright pin.",
        bulletPoints: [
          "Mesh convergence study conducted with quadratic tetrahedral solid elements, refining the mesh around tube-to-clevis weld fillets.",
          "Maximum Von Mises stress identified at shock mount weld interface (182 MPa), comfortably beneath 4130 normalized yield strength (435 MPa), yielding a Factor of Safety of 2.39.",
          "Deflection analysis showed less than 0.85 mm total lateral displacement under maximum cornering load, preventing unwanted wheel toe changes."
        ],
        callout: {
          type: "formula",
          title: "Dynamic Factor of Safety (Von Mises)",
          text: "FoS = \\sigma_{yield} / \\sigma_{vM,max} = 435\\text{ MPa} / 182\\text{ MPa} = 2.39 \\quad (\\text{Target: } \\ge 2.2)"
        }
      },
      {
        title: "03. Machine Shop Fabrication & Tolerancing",
        subtitle: "From raw tube stock to heat-treated, race-proven suspension hardware",
        content: "Manufactured the prototype components utilizing machine shop tools at Cornell: manual lathe for turning bearing cups and misalignment spacers to ±0.0005\" press-fit tolerance, and CNC milling for precision shock clevises and chassis mounting points.",
        bulletPoints: [
          "Toleranced bearing bores checked with telescoping bore gauges and micrometers.",
          "Post-weld inspection for complete joint penetration before heat treatment and protective anodization."
        ]
      }
    ]
  },
  {
    slug: "baja-brake-lines",
    number: "02",
    title: "TG22 Brake Lines & Chassis Routing",
    shortTitle: "Brake Lines",
    organization: "Cornell Baja SAE Racing",
    category: "Automotive Brake Plumbing & 3D CAD",
    timeline: "2024 – 2025 Season",
    role: "Mechanical Engineer — Brake Lines (Brakes Subteam)",
    summary: "Design, 3D CAD packaging, and chassis routing of the rigid stainless and flexible brake lines for Cornell's TG22 Baja SAE off-road racer, engineering line geometry, bend radii, chassis mounts, and caliper interfaces for dynamic 4-wheel lockup.",
    has3dModel: true,
    modelUrl: "/models/brake-lines/TG22_Brake_Lines_Assembly.glb",
    tags: ["SolidWorks", "Brake Lines", "Hard Lines", "Vehicle Packaging", "Chassis Routing"],
    specs: [
      { label: "Vehicle Platform", value: "Cornell TG22 Baja SAE" },
      { label: "Working Pressure", value: "1,200 PSI Nominal (1,800 PSI Peak)" },
      { label: "Master Cylinders", value: "Wilwood Dual Tandem Cylinders" },
      { label: "Caliper Configuration", value: "3-Caliper (Dual Front Rotors, Single Rear Rotor)" },
      { label: "Hydraulic Fluid", value: "DOT 4 High-Temperature Synthetic Fluid" },
      { label: "Tubing Specification", value: "3/16\" Seamless 304 Stainless + Braided PTFE" },
      { label: "Telemetry Sensors", value: "Dual Solid-State Pressure Transducers" },
      { label: "CAD System", value: "SolidWorks Parametric Assembly" },
    ],
    sections: [
      {
        title: "01. Brake Line Packaging & SAE Standards",
        subtitle: "Routing lines to deliver full hydraulic clamping pressure for 4-wheel lockup",
        content: "Under Baja SAE regulations, every vehicle must achieve dynamic lockup of all four wheels simultaneously on dry pavement during technical inspection. My core focus was designing and routing the brake lines connecting the tandem master cylinders to each corner caliper, ensuring zero interference with moving suspension links or steering travel.",
        bulletPoints: [
          "Engineered dual independent brake lines: front and rear brake circuits isolated via balance bar to ensure safety in the event of a line rupture.",
          "Integrated inline brake pressure transducer fittings to automatically illuminate brake lights at >100 PSI.",
          "Routed lines with high clearance against off-road rock spray, suspension articulation, and thermal radiation from the exhaust manifold."
        ],
        callout: {
          type: "spec",
          title: "SAE Technical Inspection Rule B8.3.1",
          text: "The vehicle must be equipped with a hydraulic braking system that acts on all four wheels and is operated by a single foot control. The system must have two independent hydraulic circuits."
        }
      },
      {
        title: "02. Line Routing Architecture & Bend Geometry",
        subtitle: "Packaging rigid stainless hardlines alongside flexible braided hoses",
        content: "The TG22 brake lines utilize an optimized hybrid routing strategy: rigid 3/16-inch seamless stainless steel hardlines run along the roll cage tubes for maximum volumetric efficiency and minimum pedal compliance, transitioning to flexible stainless steel braided PTFE hoses across dynamic suspension A-arms.",
        bulletPoints: [
          "Modeled custom routing geometry in SolidWorks CAD to verify minimum bend radii (at least 3x tube outer diameter) and prevent wall thinning or flow restriction.",
          "Positioned welded chassis mounting tabs with rubber-insulated P-clamps along the 4130 chromoly roll cage to prevent line vibration and fatigue.",
          "Calculated volumetric expansion: rigid stainless hardlines reduce pedal sponge by 38% compared to continuous flexible rubber hoses.",
          "Installed aluminum T-junction blocks to split front circuit line pressure equally to left and right calipers."
        ]
      },
      {
        title: "03. Upright Interface & Dynamic Clearance",
        subtitle: "Connecting brake lines into the corner assembly with zero line binding",
        content: "As shown in the live 3D SolidWorks assembly above, the brake lines route into the TG22 front uprights and connect to the calipers. The line geometry and hose slack were carefully validated through full steering lock and suspension bump travel to prevent line pinching or tension.",
        bulletPoints: [
          "Validated dynamic line clearance under maximum steering angle and full suspension bump.",
          "Ensured easy bleeder screw and fitting accessibility so the team can perform full hydraulic bleeds in under 4 minutes in the competition pit lane."
        ]
      }
    ]
  },
  {
    slug: "nitrogen-laser-pulse-amplifier",
    number: "03",
    title: "Pulse Amplifier & Discharge Circuit for Nitrogen Laser",
    shortTitle: "Nitrogen Laser Pulse Amp",
    organization: "Cornell University — Applied Physics (AEP 1100)",
    category: "Pulsed Power & Optoelectronics",
    timeline: "Fall 2025",
    role: "Lead Hardware & Circuit Builder (Dr. J. Velazquez Lab)",
    summary: "Constructed and tested a multi-stage high-voltage pulse amplifier system for a molecular nitrogen laser, integrating a 555-timer astable pulse generator, SCR fast electronic switch, 1:4 pulse transformer, and a Hydrogen Thyratron gas switch to achieve nanosecond-scale stimulated ultraviolet emission at 337.1 nm.",
    heroImage: "/images/laser/nitrogen-laser-apparatus.jpg",
    images: [
      {
        url: "/images/laser/nitrogen-laser-apparatus.jpg",
        caption: "Physical Nitrogen Laser apparatus in Dr. J. Velazquez's Cornell laboratory, showing the high-voltage chassis, thyratron housing, and UV discharge chamber."
      },
      {
        url: "/images/laser/lasing-threshold-plot.png",
        caption: "Plot 1: Photodiode output voltage as a function of power supply voltage, showing the lasing threshold at Vth ≈ 10.5 kV and saturation plateau at ~13.5 kV."
      },
      {
        url: "/images/laser/pressure-curve-plot.jpg",
        caption: "Plot 2: Laser output vs. nitrogen cavity pressure (Torr), establishing the optimal gas excitation regime between 15 and 50 Torr."
      },
      {
        url: "/images/laser/speed-of-light-time-delay-plot.jpg",
        caption: "Plot 3: Dual photodiode transit time vs. distance, determining inverted signal speed (m = 0.0396 ns/cm) and cable length calibration."
      }
    ],
    has3dModel: false,
    tags: ["AEP 1100", "Optoelectronics", "Pulsed Power", "Thyratron", "High Voltage", "Fast Switching"],
    specs: [
      { label: "Laser Wavelength", value: "337.1 nm (Ultraviolet C-band)" },
      { label: "Measured Pulse Duration", value: "18.1 nanoseconds (Oscilloscope Verified)" },
      { label: "Lasing Threshold Voltage", value: "Vth ≈ 10.5 ± 0.3 kV" },
      { label: "Saturation Voltage", value: "Vsat ≈ 13.5 ± 0.5 kV" },
      { label: "Trigger Pulse Output", value: "1,600 V Sharp Spike (Stepped up from 400 VDC)" },
      { label: "Timing Pulse Generator", value: "555 Timer in Astable Mode (~3 Hz Repetition Rate, 18 V Amplitude)" },
      { label: "Primary Gas Switch", value: "Hydrogen Thyratron with Heater & Reservoir Circuits" },
      { label: "Laser Cavity Length", value: "L = 72.5 ± 0.5 cm (~300 Electrode Pairs)" },
    ],
    sections: [
      {
        title: "01. Physics Principle: Population Inversion in Molecular Nitrogen",
        subtitle: "Why ultra-fast excitation circuitry is mandatory for 337.1 nm lasing",
        content: "A molecular nitrogen laser operates on the second positive band transition (C³Πᵤ → B³Π_g) emitting in the ultraviolet at 337.1 nm. The radiative lifetime of the excited C-state is approximately 40 ns, but the lower B-state lifetime is ~10 microseconds. Because the lower state empties much more slowly than the upper state fills, population inversion is self-terminating: the electrical discharge pulse must dump thousands of volts into the nitrogen gas in mere nanoseconds before stimulated emission ceases.",
        bulletPoints: [
          "Measured laser cavity length: L = 72.5 ± 0.5 cm, giving an intracavity light round-trip time of 4.83 ± 0.03 ns.",
          "Low reflectivity quartz exit window (R ≈ 0.08) confirms the laser operates in a superradiant, high-gain regime where light needs only 1-2 passes through the excited medium."
        ]
      },
      {
        title: "02. Three-Stage Circuit Architecture",
        subtitle: "From a 555 astable timer to a 1,600V thyratron trigger pulse",
        content: "The complete laser system comprises three carefully synchronized hardware subsystems:",
        bulletPoints: [
          "Pulse Generator: Stepped-down 120 VAC to 12 VAC, rectified and smoothed to 18 VDC. Configured a 555 timer in astable mode with a 2.2 µF capacitor and 100 kΩ / 16 kΩ resistor network to produce a steady 3 Hz, 18 V trigger pulse train via BNC output.",
          "Pulse Amplifier (Low-Voltage Input): An SCR (Silicon Controlled Rectifier) fast electronic switch receives the 18 V pulse at Pin G, closing the conduction path to trigger discharge.",
          "Pulse Amplifier (High-Voltage Conversion): 110 VAC stepped up to 270 VAC via transformer, rectified by a diode network and smoothed to ~400 VDC. A 20 kΩ 5W resistor charges a 1.0 µF capacitor, which dumps rapidly through a 1:4 pulse transformer upon SCR closure to produce a sharp 1,600 V trigger pulse with a clean negative trailing edge."
        ]
      },
      {
        title: "03. Chassis Discharge & Hydrogen Thyratron Switching",
        subtitle: "Dumping parallel storage capacitors across 300 electrode pairs",
        content: "The 1,600 V pulse from the pulse amplifier arrives at the grid of the Hydrogen Thyratron within the main chassis. The thyratron utilizes a cathode heater and a titanium hydride reservoir to maintain an optimal low-pressure hydrogen plasma environment. Upon grid trigger, the thyratron becomes fully conductive, rapidly transferring energy from ten parallel storage capacitors (C₁) into four peaking capacitors (C₂) across bandsaw blade electrodes containing ~300 electrode pairs inside the gas tube.",
        bulletPoints: [
          "Lasing Threshold: Light first appeared at 10.0 kV (spontaneous emission) and focused into a sharp, coherent beam at 11.0 kV (stimulated emission). Measured lasing threshold Vth = 10.5 ± 0.3 kV.",
          "Saturation Voltage: Output power plateaued at Vsat = 13.5 ± 0.5 kV as all available nitrogen molecules reached the excited state.",
          "Gas Pressure Dynamics: Optimal lasing output was recorded between 15 Torr and 50 Torr. At low pressures (<15 Torr), too few collisions occur; at high pressures (>50 Torr), excess collisions prematurely de-excite the upper lasing state."
        ],
        callout: {
          type: "formula",
          title: "Experimental Timing Results (AEP 1100 Lab)",
          text: "t_{round-trip} = \\frac{2L}{c} = 4.83 \\pm 0.03\\text{ ns} \\quad | \\quad \\tau_{pulse} = 18.1\\text{ ns} \\quad | \\quad V_{threshold} = 10.5 \\pm 0.3\\text{ kV}"
        }
      }
    ]
  },
  {
    slug: "vex-competition-robotics",
    number: "04",
    title: "High-Speed VEX World Finalist Competition Robot",
    shortTitle: "VEX World Finalist Robot",
    organization: "Danbury Robotics",
    category: "Competitive Robotics & Autonomous Systems",
    timeline: "Sep 2021 – June 2025",
    role: "Lead Designer & Builder",
    summary: "Spearheaded mechanical design, physical build, and autonomous C++ programming for competition robots over four seasons, earning 51 awards including CT State Champion and VEX World Championship Finalist.",
    has3dModel: false,
    tags: ["Robotics", "C++", "CAD Modeling", "Mechanism Design", "51 Awards", "Odometry"],
    specs: [
      { label: "Competition Honors", value: "51 Awards • World Finalist (Top 0.5% Worldwide)" },
      { label: "Major Titles", value: "CT State Champion • WAVE@WPI Champion • Spirit Division Champion" },
      { label: "Drivetrain", value: "High-Torque 6-Motor All-Omni Wheel Base" },
      { label: "Autonomous Tracking", value: "Three-Wheel Odometry + Closed-Loop PID" },
      { label: "Programming", value: "C++ (VS Code / PROS Kernel)" },
      { label: "Cycle Speed", value: "Sub-2.0s Scoring Cycle with Pneumatic Indexing" },
    ],
    sections: [
      {
        title: "01. Competition Engineering & Design Rigor",
        subtitle: "Managing design iterations from hand-drawn schematics to high-performance hardware",
        content: "Led the mechanical design and physical assembly of multiple generations of competition robots. Every mechanism was developed through rigorous hand-drawn engineering sketches, CAD modeling, and continuous testing to comply with strict VEX volumetric size boxes and pneumatic rules.",
        bulletPoints: [
          "Designed multi-stage intake rollers with custom polyurethane gearing for rapid object acquisition.",
          "Engineered pneumatic indexers with pressure regulators to maximize piston actuations per air tank charge.",
          "Maintained meticulous engineering design notebooks documenting mechanical iterations, failure modes, and match strategies."
        ]
      },
      {
        title: "02. Autonomous Pathing & Control Systems",
        subtitle: "Custom C++ routines with three-wheel odometry and PID tracking",
        content: "Programmed 15-second autonomous routines in C++ executing multi-step scoring tasks without human driver intervention. Developed a custom tracking algorithm utilizing unpowered tracking wheels equipped with optical quadrature encoders to compute global robot position (X, Y, Theta) in real-time.",
        bulletPoints: [
          "Implemented closed-loop PID control loops for drive motor velocity and heading corrections.",
          "Optimized motion profiles using trapezoidal velocity curves to prevent wheel slippage on competition foam tiles."
        ]
      }
    ]
  }
];
