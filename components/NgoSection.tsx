'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Position = {
  roleName: string;
  fromYear: string;
  toYear?: string;
};

type NGORole = {
  _id: string;
  organization: string;
  positions: Position[];
};

export default function NgoSection({ roles }: { roles: NGORole[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="ngos" className="px-6 md:px-12 py-24 bg-stone-50 border-y border-stone-200/50">
      <h2 className="text-3xl font-serif mb-10">NGO Involvement</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {roles.map((ngo) => {
          const isExpanded = expandedId === ngo._id;
          const currentPosition = ngo.positions[0]; // Ordered by fromYear desc in query
          const pastPositions = ngo.positions.length > 1 ? ngo.positions : [];

          return (
            <motion.div
              key={ngo._id}
              layout
              onClick={() => setExpandedId(isExpanded ? null : ngo._id)}
              className={`p-6 border rounded-2xl bg-white transition cursor-pointer hover:border-stone-400 ${isExpanded ? 'shadow-lg border-stone-400' : 'hover:shadow-md border-stone-200'
                }`}
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-medium text-lg mb-1">{ngo.organization}</h3>
                  <p className="text-sm text-neutral-600">
                    {currentPosition.roleName} • {currentPosition.fromYear} {currentPosition.toYear ? `– ${currentPosition.toYear}` : '– Present'}
                  </p>
                </div>
                {pastPositions.length > 0 && (
                  <div className="p-1 rounded-full bg-stone-100 text-stone-500">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                )}
              </div>

              <AnimatePresence>
                {isExpanded && pastPositions.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pl-2 border-l-2 border-stone-100 space-y-6 relative">
                      {ngo.positions.map((pos, index) => (
                        <div key={index} className="relative pl-6">
                          {/* Timeline Dot */}
                          <div className={`absolute -left-[11px] top-1 w-4 h-4 rounded-full border-4 border-white shadow-sm ring-1 ring-stone-200 ${index === 0 ? 'bg-stone-800' : 'bg-stone-300'
                            }`} />

                          <h4 className="text-sm font-semibold text-stone-900 leading-tight">
                            {pos.roleName}
                          </h4>
                          <p className="text-xs text-stone-500 mt-0.5">
                            {pos.fromYear} {pos.toYear ? `– ${pos.toYear}` : '– Present'}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
