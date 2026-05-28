import { useState } from 'react';
import { PodcastEpisode } from '../types';
import { Play, Calendar, Clock, ChevronRight, Award, Search, Filter, Volume2 } from 'lucide-react';

export default function Podcast() {
  const [filterTopic, setFilterTopic] = useState<string>('All');
  const [activeEpisode, setActiveEpisode] = useState<string>('ep1');
  const [playing, setPlaying] = useState<boolean>(false);

  const episodes: PodcastEpisode[] = [
    {
      id: 'ep1',
      title: 'Episode 42: Breaking Down Complex Wrongful Death Truck Crash Liability',
      duration: '38 mins',
      date: 'May 24, 2026',
      category: 'Wrongful Death',
      youtubeId: 'dQw4w9WgXcQ',
      summary: 'Senior Partner Jason Keith and Atiya Clark sit down to investigate state trucking regulations, federal motor safety guidelines, and corporate liability strategy.',
      takeaways: [
        'How electronic logging devices prove driver fatigue',
        'Corporate structure shell companies in logistics litigation',
        'Quantifying non-economic wrongful death compensation before a jury'
      ]
    },
    {
      id: 'ep2',
      title: 'Episode 41: Federal White Collar Whistleblower Investigations & Defense',
      duration: '45 mins',
      date: 'May 10, 2026',
      category: 'Federal Law',
      youtubeId: 'dQw4w9WgXcQ',
      summary: 'Managing Partner Marcus Vance details modern defense strategy when corporate entities are subject to sudden DOJ grand jury subpoenas and civil records requests.',
      takeaways: [
        'Understanding pre-indictment voluntary compliance strategies',
        'How attorney-client communication protects critical audit trails',
        'Responding to federal search warrants in office spaces'
      ]
    },
    {
      id: 'ep3',
      title: 'Episode 40: Trial Storytelling: Captivating the Greensboro Jury',
      duration: '29 mins',
      date: 'Apr 28, 2026',
      category: 'Trial Strategy',
      youtubeId: 'dQw4w9WgXcQ',
      summary: 'Litigation Lead Mark Cummings provides an authentic behind-the-scenes look at structuring visual evidence charts and delivery tricks during key closing arguments.',
      takeaways: [
        'Pruning complex legal codes into simple visual graphics',
        'The psychology of the sequence: when to introduce top witnesses',
        'Maintaining jury eye connection during defense briefs'
      ]
    }
  ];

  const categories = ['All', 'Wrongful Death', 'Federal Law', 'Trial Strategy'];

  const filteredEpisodes = filterTopic === 'All' 
    ? episodes 
    : episodes.filter(ep => ep.category === filterTopic);

  const currentPlayingEpisode = episodes.find(ep => ep.id === activeEpisode) || episodes[0];

  return (
    <div className="pt-20 min-h-screen bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-blue-50 text-secondary border border-blue-100/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-flex items-center gap-1">
            <Volume2 size={13} /> Legal Insights commentary Broadcasts
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-black text-slate-900 mt-4 mb-2">
            NXTGen Legal Broadcast
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Elite commentary regarding statutory shifts, landmark trial outcomes, regulatory compliance guides, and high-consequence jurisprudence updates from active litigators.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterTopic(cat)}
              className={`py-2 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${
                filterTopic === cat
                  ? 'bg-secondary text-white border-secondary'
                  : 'bg-white text-slate-600 border-slate-200/60 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Layout: Left list of episodes, Right interactive player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Episode listings (L: 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {filteredEpisodes.length === 0 ? (
              <div className="bg-white rounded-xl p-8 text-center border text-slate-400 text-xs">
                No episodes found under this specialty selection.
              </div>
            ) : (
              filteredEpisodes.map((ep) => (
                <div 
                  key={ep.id}
                  onClick={() => {
                    setActiveEpisode(ep.id);
                    setPlaying(false);
                  }}
                  className={`p-6 rounded-2xl bg-white border cursor-pointer transition-all hover:shadow-lg ${
                    activeEpisode === ep.id 
                      ? 'border-secondary bg-white shadow-xl shadow-secondary/5' 
                      : 'border-slate-200/60'
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] font-black uppercase tracking-widest bg-blue-50 text-secondary border border-blue-100/50 py-0.5 px-2 rounded">
                      {ep.category}
                    </span>
                    <div className="text-[10px] font-medium text-slate-400 flex items-center gap-2">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {ep.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {ep.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-[16px] sm:text-lg font-serif font-bold text-slate-900 mb-2 leading-snug group-hover:text-secondary">
                    {ep.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                    {ep.summary}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider text-secondary">
                    <span>{activeEpisode === ep.id ? 'Active Episode' : 'Listen/Analyze Case'}</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Player Mock (R: 5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <span className="text-xs font-black uppercase tracking-widest text-[#090644]">
                  Media Visualizer Console
                </span>
                <span className="w-2.5 h-2.5 bg-secondary rounded-full"></span>
              </div>

              {/* Video Player Display Container */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
                {playing ? (
                  <iframe 
                    className="w-full h-full border-0 absolute"
                    src={`https://www.youtube.com/embed/${currentPlayingEpisode.youtubeId}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="text-center p-6 space-y-4 flex flex-col items-center">
                    <button 
                      onClick={() => setPlaying(true)}
                      className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg shadow-secondary/20 hover:scale-105 transition-all cursor-pointer"
                    >
                      <Play size={24} className="fill-white ml-1" />
                    </button>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                      Press to Play Analysis Commentary
                    </div>
                  </div>
                )}
              </div>

              {/* Active Episode descriptive metadata */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-lg text-slate-100 leading-snug">
                    {currentPlayingEpisode.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mt-2 font-medium">
                    {currentPlayingEpisode.summary}
                  </p>
                </div>

                <div className="bg-slate-900 rounded-xl p-4 border border-slate-800/80 space-y-3">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                    <Award size={12} className="text-secondary" /> Key Legal Takeaways Explored:
                  </h5>
                  <ul className="space-y-2">
                    {currentPlayingEpisode.takeaways.map((take, tIdx) => (
                      <li key={tIdx} className="text-[11px] text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-secondary font-bold font-mono mt-0.5">•</span>
                        <span>{take}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
