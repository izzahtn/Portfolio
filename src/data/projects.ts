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
    title: "TG23 Rear Suspension Links & Kinematics",
    shortTitle: "Rear Suspension Links",
    organization: "Cornell Baja SAE Racing",
    category: "Vehicle Suspension & FEA",
    timeline: "2025 – 2026 Season",
    role: "Mechanical Engineer — Suspension Subteam",
    summary: "Design, vehicle packaging, and Ansys structural FEA for Cornell Baja Racing's TG23 rear suspension links, transitioning from previous bent lower tubes to optimized straight-tube links analyzed across 6 dynamic vehicle load cases.",
    has3dModel: false,
    tags: ["Ansys Mechanical", "FEA", "SolidWorks", "Suspension Kinematics", "4130 Chromoly", "Baja SAE"],
    specs: [
      { label: "Vehicle Platform", value: "Cornell Baja Racing TG23" },
      { label: "Suspension Architecture", value: "Dual-Link Independent Rear Suspension (IRS)" },
      { label: "Link Configuration", value: "Upper Wishbone A-Arm + Lower Shock-Bearing Link" },
      { label: "Tube Geometry", value: "Straight Lower & Upper Tubes (Stress & Weight Optimized)" },
      { label: "Structural Materials", value: "4130 Chromoly Steel Alloy + Precision Machined Cups" },
      { label: "FEA Simulation Suite", value: "Ansys Mechanical Structural Solver" },
      { label: "Dynamic Load Cases", value: "6 Cases: Landing, In/Outboard Curbslam, Rear End, Tree Boom, Tree Toast" },
      { label: "Kinematic Motion", value: "Multi-Axis Travel Without Steering Linkage Coupling" },
      { label: "Shock Mounting", value: "Direct Lower-Link Clevis Tabs Braced to Trailing Arm" },
      { label: "Fabrication & Fixturing", value: "Self-Machined Weld Fixtures & TIG-Welded Linkages" },
    ],
    sections: [
      {
        title: "01. Suspension Mandate & Transition to Straight-Tube Geometry",
        subtitle: "Constraining wheel geometry, packaging shocks, and eliminating bend stresses",
        content: "On a single-seat off-road Baja racer, the rear suspension links must constrain the rear wheels to the chassis frame, withstand massive multi-axis impact forces, and carry the vehicle's dynamic shock absorber assemblies through extreme articulation. Unlike the front suspension, the rear linkages do not accommodate steering inputs, allowing geometry to be purely optimized for dynamic camber curves, driveshaft clearance, and impact absorption.",
        bulletPoints: [
          "Identified root limitations in previous vehicle designs: past cars utilized bent lower tubes to gain ground clearance and angle shock tabs, but this required an auxiliary crossbar, introduced bend stress concentrations, and consumed scarce packaging envelope near frame hardpoints.",
          "Selected straight-tube architecture for both uppers and lowers: eliminates the need to relocate frame shock hardpoints, removes manufacturing bend dies, eases welding fixturing, and cuts overall unsprung mass.",
          "In the latest design iteration, the secondary crossbar from the center bar to the lower link side has been eliminated, simplifying the weldment while maintaining high structural rigidity.",
          "Engineered simplified bearing cup geometry for precision lathe machining and seamless fitment with spherical articulation bearings."
        ],
        callout: {
          type: "spec",
          title: "Design Constraints & Manufacturing Objectives",
          text: "• Architecture: Straight lower & upper tubes (no bends)\n• Frame Packaging: Zero relocation of chassis shock mount hardpoints\n• Clearance: Strict envelope clearance to dynamic rotating driveshafts\n• Manufacturability: Streamlined welding setups and simplified lathe-turned bearing cups"
        }
      },
      {
        title: "02. Ansys Structural FEA Across 6 Dynamic Load Cases",
        subtitle: "Simulating landing shock, obstacle collisions, and high-speed curb strikes",
        content: "Using Ansys Mechanical, finite element structural simulations were executed across multiple suspension ride positions to identify peak stress concentrations and verify structural integrity against yield. The rear linkages were evaluated against 6 core vehicle load cases derived from off-road racing conditions:",
        bulletPoints: [
          "Landing: Simulates peak dynamic vertical compression following a 6-foot jump landing with full shock damping resistance.",
          "Outboard & Inboard Curbslam: Evaluates high-energy lateral tire strikes against immovable obstacles, testing crossmember shear and trailing arm bending.",
          "Rear End Collision: Models direct reverse impact deceleration forces transmitted through the rear upright.",
          "Tree Boom & Tree Toast: Simulates frontal and oblique high-speed tree collisions typical of endurance woods courses, testing trailing-arm buckling resistance.",
          "Stress & Tab Optimization: Refining the Ansys model with solid weld fillets and optimizing the transition geometry between the shock mounting tabs and the trailing arm."
        ],
        callout: {
          type: "formula",
          title: "Dynamic Evaluation Regime",
          text: "\\text{6 Critical Load Cases: } \\begin{cases} \\text{Vertical: Landing} \\\\ \\text{Lateral: Inboard \\& Outboard Curbslam} \\\\ \\text{Longitudinal: Rear End Impact} \\\\ \\text{Oblique Obstacle: Tree Boom \\& Tree Toast} \\end{cases}"
        }
      },
      {
        title: "03. Machine Shop Fabrication & Welded Fixturing",
        subtitle: "Custom in-house weld fixtures, precision lathe-turned cups, and TIG welding execution",
        content: "Manufacturability is central to how I approach this project. Rather than relying on generic shop clamps, I am making the dedicated weld fixtures myself in the machine shop to locate the suspension tubes and bearing cups with strict geometric accuracy before and during TIG welding.",
        bulletPoints: [
          "Personally fabricating custom weld fixtures to clamp the tubes and maintain strict pivot centerline alignment across both A-arm pivot axes during TIG welding.",
          "Welding the 4130 chromoly linkages with tight coped fitup, sequencing passes to manage heat input and eliminate thermal distortion across the bearing cups.",
          "Simplified bearing cups machined on manual lathes to ±0.0005\" press-fit tolerances, verified with telescoping bore gauges.",
          "Transitioning to straight tubing eliminated complex tube-bending setups, allowing fixturing and welding to proceed with minimal cycle time."
        ]
      }
    ]
  },
  {
    slug: "baja-brake-lines",
    number: "02",
    title: "TG22 Brake Lines & Hydraulic Distribution",
    shortTitle: "Brake Lines",
    organization: "Cornell Baja SAE Racing",
    category: "Automotive Hydraulics & CNC Machining",
    timeline: "Spring 2026",
    role: "Mechanical Engineer — Brake Lines (Brakes Subteam)",
    summary: "Complete redesign, CNC machining, and packaging of the vehicle brake lines and custom 6061 aluminum X & T distribution blocks for Cornell Baja Racing, resolving prior air-bubble bleed traps and cockpit interference.",
    has3dModel: true,
    modelUrl: "/models/brake-lines/TG22_Brake_Lines_Assembly.glb",
    tags: ["SolidWorks", "CNC Tormach", "6061 Aluminum", "Hydraulic Routing", "Brake Lines", "Baja SAE"],
    specs: [
      { label: "Vehicle Platform", value: "Cornell Baja Racing (Spring 2026)" },
      { label: "Core Subsystems", value: "Brake Lines & Custom Distribution Blocks" },
      { label: "Tubing Specification", value: "Metal Braided with Protective Outer Coating" },
      { label: "Manifold Blocks", value: "Custom 6061 Aluminum X-Block & T-Block" },
      { label: "Machine Tool", value: "CNC Tormach Mill (Multi-Setup Machining)" },
      { label: "Block Sealing", value: "Flat Machined Faces with Copper Crush Washers" },
      { label: "Port Thread Standards", value: "6mm Tapped (Brake Lines) + 7/16\" Tapped (Pressure Sensor)" },
      { label: "Tubing Cut Lengths", value: "Masters-X: 17\" • X-Long: 35\" • X-Short: 26\" • Masters-T: 38\" • T-Rear: 50\"" },
      { label: "Caliper Configuration", value: "Top-Mounted Calipers on Rotor Assembly" },
      { label: "Fluid Bleed Protocol", value: "Syringe Vacuum & Caliper Piston Actuation" },
      { label: "Validation Results", value: "Zero Fluid Leaks • Bubble-Free Front & Rear Circuits" },
      { label: "Competition Spares", value: "2 Fully Machined Hot-Spare Blocks" },
    ],
    images: [
      {
        url: "/images/brake-lines/brake_lines_schematic.png",
        caption: "Figure 1: Complete vehicle brake lines CAD routing layout, illustrating tandem master cylinders, distribution blocks, pressure sensors, and corner caliper plumbing."
      },
      {
        url: "/images/brake-lines/front_lines_suspension.png",
        caption: "Figure 2: Front brake lines routing: tubing drops cleanly near the brake pedal to the X-block and branches directly along upper suspension links to calipers."
      },
      {
        url: "/images/brake-lines/t_block_combined.png",
        caption: "Figure 3: Custom 6061-T6 aluminum T-Block manifold: 3D CAD model (left) and ANSI engineering part drawing (right) detailing dimensions, tolerances, and port centerlines."
      },
      {
        url: "/images/brake-lines/x_block_combined.png",
        caption: "Figure 4: Custom 6061-T6 aluminum 4-way X-Block manifold: 3D CAD model (left) and ANSI engineering part drawing (right) detailing multi-port 6mm and 7/16\" tapping specifications."
      }
    ],
    sections: [
      {
        title: "01. Design Requirements & Root-Cause Failure Analysis",
        subtitle: "Eliminating bubble traps and driver cockpit interference from previous designs",
        content: "The primary function of the brake lines is to transmit hydraulic fluid pressure from the tandem master cylinders to the brake calipers. Under pedal application, hydraulic pressure displaces caliper pistons against the brake rotors to decelerate the vehicle. In previous car iterations, routing suffered from a critical failure mode: the front line arched down one side and then climbed up and over to the opposite side, creating a high-elevation bump. Any entrained air migrated to this peak, preventing a complete bleed and causing a dangerously soft pedal. Furthermore, the previous rear T-block faced downward near the front cockpit, obstructing driver egress and complicating pit-lane servicing.",
        bulletPoints: [
          "Mandated non-plastic, high-durability metal braided lines with protective outer coating to prevent tearing, rock strike puncture, and off-road trail abrasion.",
          "Maintained strict routing boundary constraints: lines must never fall below exposed undercarriage terrain clearance zones and must be securely fastened to chassis tubes.",
          "Engineered line slack to ensure tubing is never in tension across full suspension rebound, bump travel, and maximum steering lock.",
          "Re-architected front routing to travel cleanly down near the brake pedal to the X-block and branch outward along the upper suspension links, permanently eliminating the high-point air trap."
        ],
        callout: {
          type: "spec",
          title: "Core Design Constraints & Objectives",
          text: "• Tubing: Durable braided metal with protective outer coating (no plastic lines)\n• Routing Rule: Eliminate elevation humps to avoid air bubble traps\n• Clearance: Zero undercarriage drop below terrain-exposed frame; zero tension under suspension travel\n• Packaging: Relocate blocks to protect driver ingress/egress and optimize pit maintenance"
        }
      },
      {
        title: "02. CNC Tormach Machining & CAM Toolpathing for Distribution Blocks",
        subtitle: "Multi-setup milling, precision tapping, and hermetic copper crush washer sealing",
        content: "To distribute hydraulic pressure from the tandem master cylinders to the corner calipers and pressure transducers, custom X-junction and T-junction blocks were manufactured in Cornell's machine shop. Both manifolds were machined from solid 6061 aluminum billet stock using CAM programming and a CNC Tormach mill: first facing and squaring raw stock to rectangular bounds, followed by multi-setup precision drilling and thread-tapping multiple 6mm ports for brake lines and a 7/16\" port for the inline hydraulic pressure transducer.",
        bulletPoints: [
          "Executed multi-setup CAM operations on the CNC Tormach to machine each block slide face flat, guaranteeing a hermetic, leak-proof hydraulic seal with copper crush washers under dynamic braking pressures.",
          "Programmed final 2D adaptive pocketing operations to remove non-structural material, achieving significant weight savings while maintaining full thread integrity.",
          "Fabricated two complete sets of newly machined X and T blocks as competition hot spares for immediate trackside swap capability.",
          "Prepared custom line lengths: Masters-to-X (17 in), X-to-Longer Side (35 in), X-to-Shorter Side (26 in), Masters-to-T (38 in), and T-to-Rear Caliper (50 in)."
        ],
        callout: {
          type: "formula",
          title: "Distribution Block Port Architecture",
          text: "\\text{Line Ports: } 6\\text{mm Tapped} \\quad \\Big| \\quad \\text{Pressure Sensor: } 7/16\\text{\" Tapped} \\quad \\Big| \\quad \\text{Sealing: } \\text{Faced Slides + Copper Crush Washers}"
        }
      },
      {
        title: "03. Chassis Routing, Caliper Placement & Fluid Bleed Testing",
        subtitle: "Under-chassis packaging, top-mounted calipers, and vacuum syringe validation",
        content: "Packaging was refined across both ends of the vehicle. For the rear circuit, the T-block was moved farther back closer to the driver's seat and mounted on its side rather than pointing downward, resolving cockpit interference. Tubing was routed underneath along transverse frame cross-tubes before connecting to the rear caliper. Outboard calipers were repositioned to the top of the rotor mounts, drastically reducing line displacement during steering movements and permitting tighter, snag-free chassis attachment.",
        bulletPoints: [
          "Validation Procedure: Filled and bled the system using a vacuum syringe at the calipers to draw entrained air and brake fluid through the circuits, followed by dynamic pedal actuation to measure caliper piston displacement.",
          "Empirical Results: Discovered virtually zero air bubbles in the front lines and minimal micro-bubbles in the rear circuit, confirming the success of the new non-inverted routing path.",
          "Inspection Integrity: Verified zero fluid leakage across all 6mm fittings and pressure sensor ports; confirmed lines withstand dynamic braking cycles with zero damage or tension.",
          "Future Iterations: Identified next steps including sourcing ultra-compact pressure transducers and CNC machining custom banjo bolts to reduce assembly costs and prevent fitting fragility."
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
