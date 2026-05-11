"use client";

import { useState, useEffect } from "react";
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
  Database
} from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function AdminPanel() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  
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
                  <Input 
                    label="AVATAR_URL" 
                    value={data.profile.avatar} 
                    onChange={v => setData({...data, profile: {...data.profile, avatar: v}})}
                  />
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

            {activeTab === "evolution" && (
              <div className="space-y-xl">
                <div className="flex justify-between items-center border-b border-outline-variant/30 pb-sm">
                  <h2 className="text-headline-md text-on-surface uppercase">CAREER_TIMELINE</h2>
                  <button 
                    onClick={() => {
                      const newJob = { year: "2024 - PRESENT", role: "NEW_ROLE", company: "NEW_COMPANY", active: false };
                      setData({...data, careerTimeline: [newJob, ...data.careerTimeline]});
                    }}
                    className="flex items-center gap-xs text-[10px] font-label-caps text-primary-fixed-dim hover:bg-primary-fixed-dim/10 px-md py-sm rounded border border-primary-fixed-dim/30 transition-all"
                  >
                    <Plus className="w-4 h-4" /> ADD_LOG
                  </button>
                </div>
                <div className="space-y-lg">
                  {data.careerTimeline.map((job: any, i: number) => (
                    <div key={i} className="glass-panel p-lg rounded-xl border-l-2 border-l-primary-fixed-dim flex items-center gap-xl group">
                      <div className="grid grid-cols-4 gap-lg flex-1">
                        <div className="col-span-1">
                          <Input label="PERIOD" value={job.year} onChange={v => {
                            const newLog = [...data.careerTimeline];
                            newLog[i].year = v;
                            setData({...data, careerTimeline: newLog});
                          }} />
                        </div>
                        <div className="col-span-1">
                          <Input label="ROLE" value={job.role} onChange={v => {
                            const newLog = [...data.careerTimeline];
                            newLog[i].role = v;
                            setData({...data, careerTimeline: newLog});
                          }} />
                        </div>
                        <div className="col-span-1">
                          <Input label="COMPANY" value={job.company} onChange={v => {
                            const newLog = [...data.careerTimeline];
                            newLog[i].company = v;
                            setData({...data, careerTimeline: newLog});
                          }} />
                        </div>
                        <div className="col-span-1 flex items-center gap-md pt-lg">
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
                          <span className="text-label-caps text-[10px]">ACTIVE_STATION</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          const newLog = data.careerTimeline.filter((_: any, idx: number) => idx !== i);
                          setData({...data, careerTimeline: newLog});
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
            
            {["skills", "manifesto"].includes(activeTab) && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Settings className="w-16 h-16 text-outline/20 mb-md animate-spin-slow" />
                <h3 className="text-headline-sm text-on-surface uppercase">INTERFACE_PENDING</h3>
                <p className="text-body-md text-outline">Use the RAW_JSON tab for advanced overrides of this section.</p>
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
