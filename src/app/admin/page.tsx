"use client";

import { useState, useEffect, useRef } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Save, 
  Plus, 
  Trash2, 
  Terminal, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronRight,
  Briefcase,
  Layers,
  History,
  MessageSquare,
  Settings,
  Database,
  Upload,
  FileText,
  User,
  AtSign,
  Phone,
  Link as LinkIcon
} from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function AdminPanel() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  
  const resumeRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

  // Security check: Only allow in development
  const isDev = process.env.NODE_ENV === "development";
  
  useEffect(() => {
    if (isDev) {
      fetchData();
    }
  }, [isDev]);

  if (!isDev) {
    return notFound();
  }

  const fetchData = async () => {
    try {
      const res = await fetch("/api/admin");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setStatus({ type: 'success', message: "SYSTEM_CONFIG_UPDATED // STABLE" });
      } else {
        throw new Error("Save failed");
      }
    } catch (err) {
      setStatus({ type: 'error', message: "ERROR: WRITE_ACCESS_DENIED" });
    } finally {
      setSaving(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const handleUpload = async (file: File, type: 'resume' | 'avatar') => {
    setSaving(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData
      });
      const result = await res.json();
      if (result.success) {
        if (type === 'resume') {
          setData({ ...data, profile: { ...data.profile, resumePath: result.path } });
        } else {
          setData({ ...data, profile: { ...data.profile, avatar: result.path } });
        }
        setStatus({ type: 'success', message: `${type.toUpperCase()}_UPLOADED_SUCCESSFULLY` });
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      setStatus({ type: 'error', message: "UPLOAD_FAILED" });
    } finally {
      setSaving(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  if (loading) return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-label-caps text-primary-fixed-dim animate-pulse">INIT_SYSTEM_ADMIN...</div>
      </div>
    </PageLayout>
  );

  return (
    <PageLayout>
      <section className="py-xl">
        <div className="flex items-center justify-between mb-xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-display-lg text-on-surface uppercase flex items-center gap-md">
              <ShieldAlert className="w-12 h-12 text-primary-fixed-dim" />
              ADMIN_COMMAND_CENTER
            </h1>
            <div className="text-label-caps text-primary-fixed-dim border-l-2 border-primary-fixed-dim pl-md mt-sm">
              LOCAL_FILESYSTEM_WRITE_ACCESS: <span className="text-tertiary-fixed">ENABLED</span>
            </div>
          </motion.div>

          <button 
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-sm bg-primary-container text-on-primary-container px-xl py-lg rounded-sm tech-edge hover:bg-primary-fixed transition-all disabled:opacity-50"
          >
            {saving ? "SAVING..." : "SAVE_ALL_CHANGES"}
            <Save className="w-5 h-5" />
          </button>
        </div>

        <AnimatePresence>
          {status && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-lg p-md rounded flex items-center gap-md border ${
                status.type === 'success' ? 'bg-primary-container/10 border-primary-fixed-dim text-primary-fixed-dim' : 'bg-error-container/10 border-error text-error'
              }`}
            >
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-label-caps">{status.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-3 space-y-sm">
            {[
              { id: "profile", label: "IDENTITY", icon: Briefcase },
              { id: "contact", label: "CONTACT_CHANNELS", icon: AtSign },
              { id: "evolution", label: "CAREER_LOG", icon: History },
              { id: "projects", label: "PROJECTS", icon: Layers },
              { id: "skills", label: "TECH_STACK", icon: Database },
              { id: "manifesto", label: "PHILOSOPHY", icon: MessageSquare },
              { id: "raw", label: "RAW_JSON", icon: Terminal },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-md px-lg py-md rounded transition-all text-left ${
                  activeTab === tab.id 
                    ? "bg-primary-container text-on-primary-container tech-glow" 
                    : "glass-panel text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-label-caps">{tab.label}</span>
                {activeTab === tab.id && <ChevronRight className="ml-auto w-4 h-4" />}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9 glass-panel p-xl rounded-2xl min-h-[60vh] border-primary-fixed-dim/20">
            {activeTab === "profile" && (
              <div className="space-y-xl">
                <h2 className="text-headline-md text-on-surface uppercase border-b border-outline-variant/30 pb-sm">IDENTITY_CONFIG</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <Input 
                    label="DISPLAY_NAME" 
                    value={data.profile.name} 
                    onChange={v => setData({...data, profile: {...data.profile, name: v}})}
                  />
                  <Input 
                    label="CURRENT_ROLE" 
                    value={data.profile.role} 
                    onChange={v => setData({...data, profile: {...data.profile, role: v}})}
                  />
                  <Input 
                    label="LOCATION_DATA" 
                    value={data.profile.location} 
                    onChange={v => setData({...data, profile: {...data.profile, location: v}})}
                  />
                  <div className="space-y-sm">
                    <label className="block text-code-sm text-outline mb-xs uppercase">RESUME_ASSET (PDF)</label>
                    <div className="flex gap-md">
                      <input 
                        type="file" 
                        ref={resumeRef} 
                        className="hidden" 
                        accept=".pdf"
                        onChange={e => e.target.files?.[0] && handleUpload(e.target.files[0], 'resume')}
                      />
                      <button 
                        onClick={() => resumeRef.current?.click()}
                        className="flex-1 glass-panel px-md py-sm rounded flex items-center gap-sm text-label-caps text-xs hover:bg-primary-container/10 transition-all border border-outline-variant/30"
                      >
                        <FileText className="w-4 h-4 text-primary-fixed-dim" />
                        {data.profile.resumePath || "UPLOAD_RESUME"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-sm">
                  <label className="block text-code-sm text-outline mb-xs uppercase">AVATAR_UPLOAD</label>
                  <div className="flex items-center gap-xl">
                    <img 
                      src={data.profile.avatar} 
                      alt="Avatar" 
                      className="w-24 h-24 rounded-full border-2 border-primary-fixed-dim object-cover"
                    />
                    <div className="flex-1">
                      <input 
                        type="file" 
                        ref={avatarRef} 
                        className="hidden" 
                        accept="image/*"
                        onChange={e => e.target.files?.[0] && handleUpload(e.target.files[0], 'avatar')}
                      />
                      <button 
                        onClick={() => avatarRef.current?.click()}
                        className="w-full glass-panel px-md py-sm rounded flex items-center justify-center gap-sm text-label-caps text-xs hover:bg-primary-container/10 transition-all border border-outline-variant/30"
                      >
                        <Upload className="w-4 h-4 text-primary-fixed-dim" />
                        SELECT_NEW_AVATAR
                      </button>
                      <div className="text-[10px] text-outline mt-xs font-jetbrains italic uppercase text-center">RECOMMENDED: 400x400 JPG/PNG</div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-code-sm text-outline mb-xs uppercase">MISSION_SUMMARY</label>
                  <textarea 
                    value={data.profile.summary}
                    onChange={e => setData({...data, profile: {...data.profile, summary: e.target.value}})}
                    rows={4}
                    className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-all resize-none font-jetbrains text-sm"
                  />
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-xl">
                <h2 className="text-headline-md text-on-surface uppercase border-b border-outline-variant/30 pb-sm">CONTACT_CHANNELS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <div className="space-y-sm">
                    <label className="flex items-center gap-sm text-code-sm text-outline uppercase">
                      <AtSign className="w-4 h-4" /> PRIMARY_EMAIL
                    </label>
                    <input 
                      type="email" 
                      value={data.profile.email} 
                      onChange={e => setData({...data, profile: {...data.profile, email: e.target.value}})}
                      className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-all font-jetbrains text-sm"
                    />
                  </div>
                  <div className="space-y-sm">
                    <label className="flex items-center gap-sm text-code-sm text-outline uppercase">
                      <Phone className="w-4 h-4" /> CONTACT_PHONE
                    </label>
                    <input 
                      type="text" 
                      value={data.profile.phone || ""} 
                      onChange={e => setData({...data, profile: {...data.profile, phone: e.target.value}})}
                      className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-all font-jetbrains text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-lg pt-md">
                  <div className="flex justify-between items-center">
                    <h3 className="text-label-caps text-primary-fixed-dim">SOCIAL_LINKS</h3>
                    <button 
                      onClick={() => {
                        const newSocial = { name: "NEW_SOCIAL", icon: "LinkIcon", href: "" };
                        setData({...data, profile: {...data.profile, socials: [...data.profile.socials, newSocial]}});
                      }}
                      className="text-[10px] font-label-caps hover:bg-primary-container/10 px-md py-xs rounded border border-outline-variant/30"
                    >
                      ADD_LINK
                    </button>
                  </div>
                  <div className="space-y-md">
                    {data.profile.socials.map((social: any, i: number) => (
                      <div key={i} className="flex gap-md group">
                        <div className="flex-1 grid grid-cols-3 gap-md">
                          <input 
                            value={social.name} 
                            onChange={e => {
                              const newSocials = [...data.profile.socials];
                              newSocials[i].name = e.target.value;
                              setData({...data, profile: {...data.profile, socials: newSocials}});
                            }}
                            className="bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-xs font-jetbrains uppercase"
                            placeholder="PLATFORM"
                          />
                          <input 
                            value={social.href} 
                            onChange={e => {
                              const newSocials = [...data.profile.socials];
                              newSocials[i].href = e.target.value;
                              setData({...data, profile: {...data.profile, socials: newSocials}});
                            }}
                            className="col-span-2 bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-xs font-jetbrains"
                            placeholder="URL_ENDPOINT"
                          />
                        </div>
                        <button 
                          onClick={() => {
                            const newSocials = data.profile.socials.filter((_: any, idx: number) => idx !== i);
                            setData({...data, profile: {...data.profile, socials: newSocials}});
                          }}
                          className="text-error opacity-0 group-hover:opacity-100 p-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "evolution" && (
              <div className="space-y-xl">
                <div className="flex justify-between items-center border-b border-outline-variant/30 pb-sm">
                  <h2 className="text-headline-md text-on-surface uppercase">CAREER_LOG</h2>
                  <button 
                    onClick={() => {
                      const newJob = { year: "2024 - PRESENT", role: "NEW_ROLE", company: "NEW_COMPANY", active: false, description: "", achievements: [] };
                      setData({...data, careerTimeline: [newJob, ...data.careerTimeline]});
                    }}
                    className="flex items-center gap-xs text-[10px] font-label-caps text-primary-fixed-dim hover:bg-primary-fixed-dim/10 px-md py-sm rounded border border-primary-fixed-dim/30 transition-all"
                  >
                    <Plus className="w-4 h-4" /> ADD_LOG
                  </button>
                </div>
                <div className="space-y-lg">
                  {data.careerTimeline.map((job: any, i: number) => (
                    <div key={i} className="glass-panel p-lg rounded-xl border-l-2 border-l-primary-fixed-dim space-y-md group">
                      <div className="grid grid-cols-4 gap-lg items-end">
                        <Input label="PERIOD" value={job.year} onChange={v => {
                          const newLog = [...data.careerTimeline];
                          newLog[i].year = v;
                          setData({...data, careerTimeline: newLog});
                        }} />
                        <Input label="ROLE" value={job.role} onChange={v => {
                          const newLog = [...data.careerTimeline];
                          newLog[i].role = v;
                          setData({...data, careerTimeline: newLog});
                        }} />
                        <Input label="COMPANY" value={job.company} onChange={v => {
                          const newLog = [...data.careerTimeline];
                          newLog[i].company = v;
                          setData({...data, careerTimeline: newLog});
                        }} />
                        <div className="flex items-center gap-md pb-sm">
                          <input 
                            type="checkbox" 
                            checked={job.active}
                            onChange={e => {
                              const newLog = [...data.careerTimeline];
                              newLog[i].active = e.target.checked;
                              setData({...data, careerTimeline: newLog});
                            }}
                            className="w-5 h-5 rounded border-outline-variant accent-primary-fixed-dim"
                          />
                          <span className="text-label-caps text-[10px]">ACTIVE</span>
                          <button 
                            onClick={() => {
                              const newLog = data.careerTimeline.filter((_: any, idx: number) => idx !== i);
                              setData({...data, careerTimeline: newLog});
                            }}
                            className="ml-auto text-error opacity-0 group-hover:opacity-100 p-sm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-sm">
                        <label className="block text-code-sm text-outline uppercase">ROLE_DESCRIPTION</label>
                        <textarea 
                          value={job.description || ""}
                          onChange={e => {
                            const newLog = [...data.careerTimeline];
                            newLog[i].description = e.target.value;
                            setData({...data, careerTimeline: newLog});
                          }}
                          rows={2}
                          className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-all resize-none font-jetbrains text-xs"
                          placeholder="BRIEF_OVERVIEW_OF_RESPONSIBILITIES"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-xl">
                <div className="flex justify-between items-center border-b border-outline-variant/30 pb-sm">
                  <h2 className="text-headline-md text-on-surface uppercase">PROJECT_REPOSITORY</h2>
                  <button 
                    onClick={() => {
                      const newProj = { id: `new-${Date.now()}`, title: "NEW_PROJECT", category: "GENERAL", image: "", tags: [], metrics: [], challenges: [] };
                      setData({...data, projects: [newProj, ...data.projects]});
                    }}
                    className="flex items-center gap-xs text-[10px] font-label-caps text-primary-fixed-dim hover:bg-primary-fixed-dim/10 px-md py-sm rounded border border-primary-fixed-dim/30 transition-all"
                  >
                    <Plus className="w-4 h-4" /> ADD_ENTRY
                  </button>
                </div>
                <div className="space-y-lg">
                  {data.projects.map((p: any, i: number) => (
                    <div key={p.id} className="glass-panel p-lg rounded-xl border-l-2 border-l-primary-fixed-dim flex gap-xl relative group">
                      <div className="flex-1 space-y-md">
                        <div className="grid grid-cols-2 gap-md">
                          <Input label="TITLE" value={p.title} onChange={v => {
                            const newProjs = [...data.projects];
                            newProjs[i].title = v;
                            setData({...data, projects: newProjs});
                          }} />
                          <Input label="CATEGORY" value={p.category} onChange={v => {
                            const newProjs = [...data.projects];
                            newProjs[i].category = v;
                            setData({...data, projects: newProjs});
                          }} />
                        </div>
                        <Input label="IMAGE_URL" value={p.image} onChange={v => {
                          const newProjs = [...data.projects];
                          newProjs[i].image = v;
                          setData({...data, projects: newProjs});
                        }} />
                      </div>
                      <button 
                        onClick={() => {
                          const newProjs = data.projects.filter((_: any, idx: number) => idx !== i);
                          setData({...data, projects: newProjs});
                        }}
                        className="text-error opacity-0 group-hover:opacity-100 transition-opacity p-md hover:bg-error/10 rounded"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "raw" && (
              <div className="h-full flex flex-col">
                <h2 className="text-headline-md text-on-surface uppercase border-b border-outline-variant/30 pb-sm mb-xl">RAW_SYSTEM_JSON</h2>
                <textarea 
                  value={JSON.stringify(data, null, 2)}
                  onChange={e => {
                    try {
                      const parsed = JSON.parse(e.target.value);
                      setData(parsed);
                    } catch (err) {}
                  }}
                  className="flex-1 w-full bg-surface-container-high border border-outline-variant/30 rounded p-xl text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-all font-jetbrains text-xs leading-relaxed"
                />
              </div>
            )}
            
            {activeTab === "skills" && (
              <div className="space-y-xl">
                <div>
                  <div className="flex justify-between items-center border-b border-outline-variant/30 pb-sm mb-lg">
                    <h2 className="text-headline-md text-on-surface uppercase">CORE_TECHNOLOGIES</h2>
                    <button 
                      onClick={() => setData({...data, coreTechnologies: [...data.coreTechnologies, { name: "NEW_TECH", icon: "Layers" }]})}
                      className="text-[10px] font-label-caps hover:bg-primary-container/10 px-md py-xs rounded border border-outline-variant/30"
                    >
                      ADD_TECH
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
                    {data.coreTechnologies.map((tech: any, i: number) => (
                      <div key={i} className="flex gap-md group items-end glass-panel p-md rounded border-primary-fixed-dim/20">
                        <div className="flex-1 space-y-md">
                          <Input label="NAME" value={tech.name} onChange={v => {
                            const newTech = [...data.coreTechnologies];
                            newTech[i].name = v;
                            setData({...data, coreTechnologies: newTech});
                          }} />
                          <Input label="ICON" value={tech.icon} onChange={v => {
                            const newTech = [...data.coreTechnologies];
                            newTech[i].icon = v;
                            setData({...data, coreTechnologies: newTech});
                          }} />
                        </div>
                        <button 
                          onClick={() => {
                            const newTech = data.coreTechnologies.filter((_: any, idx: number) => idx !== i);
                            setData({...data, coreTechnologies: newTech});
                          }}
                          className="text-error opacity-0 group-hover:opacity-100 p-sm"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-xl">
                  <div className="flex justify-between items-center border-b border-outline-variant/30 pb-sm mb-lg">
                    <h2 className="text-headline-md text-on-surface uppercase">BENTO_SKILLS</h2>
                    <button 
                      onClick={() => {
                        const newCat = { title: "NEW_CATEGORY", icon: "Database", skills: [], tags: [] };
                        setData({...data, bentoSkills: [...data.bentoSkills, newCat]});
                      }}
                      className="text-[10px] font-label-caps hover:bg-primary-container/10 px-md py-xs rounded border border-outline-variant/30"
                    >
                      ADD_CATEGORY
                    </button>
                  </div>
                  <div className="space-y-xl">
                    {data.bentoSkills.map((cat: any, i: number) => (
                      <div key={i} className="glass-panel p-xl rounded-xl border border-primary-fixed-dim/10 space-y-xl">
                        <div className="flex justify-between items-end gap-xl">
                          <div className="flex-1 grid grid-cols-2 gap-lg">
                            <Input label="CATEGORY_TITLE" value={cat.title} onChange={v => {
                              const newBento = [...data.bentoSkills];
                              newBento[i].title = v;
                              setData({...data, bentoSkills: newBento});
                            }} />
                            <Input label="ICON" value={cat.icon} onChange={v => {
                              const newBento = [...data.bentoSkills];
                              newBento[i].icon = v;
                              setData({...data, bentoSkills: newBento});
                            }} />
                          </div>
                          <button 
                            onClick={() => {
                              const newBento = data.bentoSkills.filter((_: any, idx: number) => idx !== i);
                              setData({...data, bentoSkills: newBento});
                            }}
                            className="text-error p-md hover:bg-error/10 rounded"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="space-y-lg">
                          <div className="flex justify-between items-center">
                            <h3 className="text-label-caps text-primary-fixed-dim">SKILL_ITEMS</h3>
                            <button 
                              onClick={() => {
                                const newBento = [...data.bentoSkills];
                                newBento[i].skills.push({ name: "NEW_SKILL", desc: "" });
                                setData({...data, bentoSkills: newBento});
                              }}
                              className="text-[8px] font-label-caps hover:bg-primary-container/10 px-md py-xs rounded border border-outline-variant/20"
                            >
                              ADD_ITEM
                            </button>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                            {cat.skills.map((skill: any, si: number) => (
                              <div key={si} className="glass-panel p-lg rounded border-primary-fixed-dim/5 group relative">
                                <Input label="SKILL_NAME" value={skill.name} onChange={v => {
                                  const newBento = [...data.bentoSkills];
                                  newBento[i].skills[si].name = v;
                                  setData({...data, bentoSkills: newBento});
                                }} />
                                <div className="mt-md">
                                  <label className="block text-[10px] text-outline mb-xs uppercase">DESCRIPTION</label>
                                  <textarea 
                                    value={skill.desc}
                                    onChange={e => {
                                      const newBento = [...data.bentoSkills];
                                      newBento[i].skills[si].desc = e.target.value;
                                      setData({...data, bentoSkills: newBento});
                                    }}
                                    rows={2}
                                    className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-all resize-none font-jetbrains text-xs"
                                  />
                                </div>
                                <button 
                                  onClick={() => {
                                    const newBento = [...data.bentoSkills];
                                    newBento[i].skills = newBento[i].skills.filter((_: any, idx: number) => idx !== si);
                                    setData({...data, bentoSkills: newBento});
                                  }}
                                  className="absolute top-2 right-2 text-error opacity-0 group-hover:opacity-100 p-sm"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "manifesto" && (
              <div className="space-y-xl">
                <h2 className="text-headline-md text-on-surface uppercase border-b border-outline-variant/30 pb-sm">PHILOSOPHY_CONFIG</h2>
                <div className="space-y-lg">
                  <Input 
                    label="HEADLINE" 
                    value={data.manifesto.headline} 
                    onChange={v => setData({...data, manifesto: {...data.manifesto, headline: v}})}
                  />
                  <div>
                    <label className="block text-code-sm text-outline mb-xs uppercase">INTRO_STATEMENT</label>
                    <textarea 
                      value={data.manifesto.intro}
                      onChange={e => setData({...data, manifesto: {...data.manifesto, intro: e.target.value}})}
                      rows={3}
                      className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-all resize-none font-jetbrains text-sm"
                    />
                  </div>
                </div>

                <div className="pt-xl space-y-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="text-label-caps text-primary-fixed-dim uppercase">THE_TENETS</h3>
                    <button 
                      onClick={() => {
                        const newTenet = { id: `0${data.manifesto.tenets.length + 1}`, title: "NEW_TENET", content: "" };
                        setData({...data, manifesto: {...data.manifesto, tenets: [...data.manifesto.tenets, newTenet]}});
                      }}
                      className="text-[10px] font-label-caps hover:bg-primary-container/10 px-md py-xs rounded border border-outline-variant/30"
                    >
                      ADD_TENET
                    </button>
                  </div>
                  <div className="space-y-md">
                    {data.manifesto.tenets.map((tenet: any, i: number) => (
                      <div key={i} className="glass-panel p-lg rounded-xl border-l-2 border-l-primary-fixed-dim space-y-md group">
                        <div className="flex gap-lg items-end">
                          <Input label="ID" value={tenet.id} onChange={v => {
                            const newTenets = [...data.manifesto.tenets];
                            newTenets[i].id = v;
                            setData({...data, manifesto: {...data.manifesto, tenets: newTenets}});
                          }} />
                          <div className="flex-1">
                            <Input label="TENET_TITLE" value={tenet.title} onChange={v => {
                              const newTenets = [...data.manifesto.tenets];
                              newTenets[i].title = v;
                              setData({...data, manifesto: {...data.manifesto, tenets: newTenets}});
                            }} />
                          </div>
                          <button 
                            onClick={() => {
                              const newTenets = data.manifesto.tenets.filter((_: any, idx: number) => idx !== i);
                              setData({...data, manifesto: {...data.manifesto, tenets: newTenets}});
                            }}
                            className="text-error opacity-0 group-hover:opacity-100 p-sm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <textarea 
                          value={tenet.content}
                          onChange={e => {
                            const newTenets = [...data.manifesto.tenets];
                            newTenets[i].content = e.target.value;
                            setData({...data, manifesto: {...data.manifesto, tenets: newTenets}});
                          }}
                          rows={3}
                          className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-all resize-none font-jetbrains text-xs"
                          placeholder="CORE_TECHNICAL_PRINCIPLE_CONTENT"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Input({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-code-sm text-outline mb-xs uppercase">{label}</label>
      <input 
        type="text" 
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-surface-container-high border border-outline-variant/30 rounded px-md py-sm text-on-surface focus:outline-none focus:border-primary-fixed-dim transition-all font-jetbrains text-sm"
      />
    </div>
  );
}
