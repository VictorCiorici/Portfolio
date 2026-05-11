import { 
  Layers, 
  Palette, 
  Terminal, 
  Cpu, 
  Monitor, 
  Zap,
  Box,
  Globe,
  Briefcase,
  MessageSquare
} from "lucide-react";

export const profile = {
  name: "Victor Ciorici",
  role: "Senior Unity Developer",
  location: "Straseni, MD [GMT+2]",
  email: "victor.ciorici@gmail.com",
  summary: "Senior Unity Developer with 12+ years of expertise in the full development lifecycle—from concept and architecture to high-performance implementation. Specializing in gameplay systems, multiplayer architecture, and cross-platform optimization for PC, Mobile, and VR/AR.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  resumePath: "/resume.pdf",
  socials: [
    { name: "LINKEDIN", icon: Briefcase, href: "https://www.linkedin.com/in/victor-c-478a7849" },
    { name: "GITHUB", icon: Globe, href: "https://github.com/VictorCiorici" },
    { name: "EMAIL", icon: MessageSquare, href: "mailto:victor.ciorici@gmail.com" },
  ]
};

export const stats = [
  { value: "30+", label: "SHIPPED TITLES" },
  { value: "60fps", label: "MINIMUM TARGET" },
  { value: "8", label: "PLATFORMS MASTERED" },
];

export const coreTechnologies = [
  { name: "UNITY_CORE", icon: Layers },
  { name: "DOTS_ECS", icon: Cpu },
  { name: "XR_TOOLKIT", icon: Box },
  { name: "C#_7.0+", icon: Terminal },
  { name: "BURST_COMPILER", icon: Zap },
];

export const bentoSkills = [
  {
    title: "ENGINE_MASTERY",
    icon: Layers,
    skills: [
      { name: "Unity 3D / 2D", desc: "Expert knowledge of Core, HDRP, and URP pipelines." },
      { name: "C# / .NET", desc: "Advanced software architecture and design patterns." },
      { name: "DOTS / ECS", desc: "Building scalable data-oriented systems for massive simulations." }
    ],
    tags: ["CORE", "RUNTIME", "DOTS"]
  },
  {
    title: "GRAPHICS_PIPELINE",
    icon: Palette,
    skills: [
      { name: "Shader Development", desc: "Custom HLSL shaders and PBR materials." },
      { name: "Procedural Generation", desc: "Real-time generation of meshes, textures, and levels." },
      { name: "Rendering Optimization", desc: "GPU-accelerated simulations and draw call reduction." }
    ],
    tags: ["SHADERS", "GPU", "OPTIMIZATION"]
  },
  {
    title: "SYSTEM_ARCHITECTURE",
    icon: Terminal,
    skills: [
      { name: "Multiplayer Systems", desc: "Client/Server architecture using Photon Fusion." },
      { name: "Tools Development", desc: "Custom level editors and workflow automation utilities." },
      { name: "VR / AR Foundation", desc: "Immersive apps for Oculus, GearVR, and AR platforms." }
    ],
    tags: ["NETWORKING", "VR_AR", "TOOLS"]
  },
  {
    title: "PLATFORMS_MASTERED",
    icon: Monitor,
    skills: [
      { name: "PC (Steam)", desc: "Full lifecycle development for desktop releases." },
      { name: "Mobile (iOS / Android)", desc: "Optimization for high-traffic mobile titles." },
      { name: "WebGL / HTML5", desc: "Browser-based interactive experiences and simulations." }
    ],
    tags: ["PC", "MOBILE", "WEBGL"]
  }
];

export const careerTimeline = [
  { year: "2025 - PRESENT", role: "Senior Unity Developer", company: "Limit Break", active: true },
  { year: "2024 - 2025", role: "Senior Unity Developer", company: "SKR Games", active: false },
  { year: "2023 - 2024", role: "Senior Unity Developer", company: "Playgendary", active: false },
  { year: "2022 - 2023", role: "Lead Unity Developer", company: "GOAT Games Entertainment", active: false },
  { year: "2019 - 2022", role: "Lead Unity Developer", company: "Iron Will", active: false },
  { year: "2017 - 2019", role: "Senior Unity Developer", company: "Redox Entertainment", active: false },
  { year: "2013 - 2017", role: "Unity Developer", company: "01Devs", active: false },
  { year: "2013", role: "Junior Developer", company: "ITProlab", active: false },
];

export const manifesto = {
  headline: "ENGINEERING_MANIFESTO",
  intro: "A collection of core technical principles that guide every line of code I write. These aren't just rules—they are the architectural soul of high-performance interactive systems.",
  tenets: [
    {
      id: "01",
      title: "PERFORMANCE_BY_DEFAULT",
      content: "Optimization isn't a post-production step; it's a foundational requirement. High frame rates and low latency are the prerequisites for immersion."
    },
    {
      id: "02",
      title: "ARCHITECTURE_AS_ART",
      content: "Code should be as elegant as the visuals it renders. We build modular, scalable systems that survive the entropy of long-term development."
    },
    {
      id: "03",
      title: "THE_DOTS_REVOLUTION",
      content: "Embracing Data-Oriented Design to push hardware to its limits. Moving away from object-oriented bottlenecks to unlock massive scale."
    },
    {
      id: "04",
      title: "ITERATE_OR_DIE",
      content: "Rapid prototyping combined with rigorous testing. We build, break, and refine until the system is bulletproof."
    }
  ]
};

export const projects = [
  {
    id: "engine-core",
    title: "QUANTUM_STRIKE",
    category: "GAMEPLAY_ENGINE",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1200",
    tags: ["UNITY", "ECS", "NETWORKING"],
    metrics: [
      { label: "CONCURRENCY", value: "10K+ ENTITIES" },
      { label: "LATENCY", value: "<15MS" },
      { label: "PLATFORMS", value: "PC/CONSOLE" }
    ],
    challenges: [
      "Implementing deterministic lockstep networking in Unity's new ECS framework.",
      "Optimizing spatial partitioning for millions of interactive particles.",
      "Cross-platform shader parity between DirectX and Vulkan."
    ]
  },
  {
    id: "render-pipeline",
    title: "VOID_RUNNER_VR",
    category: "IMMERSIVE_XR",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200",
    tags: ["VR", "HDRP", "OPTIMIZATION"],
    metrics: [
      { label: "FRAMERATE", value: "90FPS STABLE" },
      { label: "RESOLUTION", value: "4K PER EYE" },
      { label: "COMFORT", value: "ELITE_RATING" }
    ],
    challenges: [
      "Maintaining 90FPS on mobile XR hardware with high-fidelity PBR rendering.",
      "Custom physics solver for low-latency VR interactions.",
      "Dynamic occlusion culling for massive procedurally generated environments."
    ]
  },
  {
    id: "tooling-sys",
    title: "NEXUS_EDITOR",
    category: "DEVELOPER_TOOLS",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200",
    tags: ["C#", "EDITOR_UI", "CI_CD"],
    metrics: [
      { label: "EFFICIENCY", value: "+40% SPEED" },
      { label: "ADOPTION", value: "100+ DEVS" },
      { label: "UPTIME", value: "99.9%" }
    ],
    challenges: [
      "Architecting a non-destructive level design workflow within the Unity Editor.",
      "Automated asset validation pipelines for multi-platform deployment.",
      "Integrating real-time telemetry data into the visual debugging suite."
    ]
  }
];
