import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';

export default function NotFoundPage() {
  return (
    <PageContainer>
      <section className="min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          {/* 404 */}
          <div className="text-[8rem] sm:text-[12rem] font-black leading-none tracking-tighter text-white/[0.04] select-none mb-4">
            404
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 -mt-8 relative z-10">
            Page not found
          </h1>
          <p className="text-white/40 text-base mb-10 max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#a8ff3e] text-black font-semibold text-sm hover:bg-[#c4ff6e] transition-colors shadow-[0_0_20px_rgba(168,255,62,0.3)]"
            >
              <Home size={16} />
              Back to Home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.1] text-white/70 font-medium text-sm hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
            >
              <ArrowLeft size={16} />
              View Projects
            </Link>
          </div>
        </motion.div>
      </section>
    </PageContainer>
  );
}
