import { useState } from 'react';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import type { ProjectCategory, ProjectFilters, SortOption } from '../../types/project';
import { cn } from '../../utils/cn';

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  filters: ProjectFilters;
  onFiltersChange: (filters: ProjectFilters) => void;
  totalCount: number;
  filteredCount: number;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured first' },
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'alphabetical', label: 'A → Z' },
];

export function ProjectFilters({
  categories,
  filters,
  onFiltersChange,
  totalCount,
  filteredCount,
}: ProjectFiltersProps) {
  const [sortOpen, setSortOpen] = useState(false);

  const toggleCategory = (cat: ProjectCategory) => {
    const next = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onFiltersChange({ ...filters, categories: next });
  };

  const clearFilters = () => {
    onFiltersChange({ categories: [], search: '', sort: 'featured' });
  };

  const hasActiveFilters =
    filters.categories.length > 0 || filters.search.trim().length > 0;

  const currentSort = SORT_OPTIONS.find((o) => o.value === filters.sort)?.label ?? 'Featured first';

  return (
    <div className="project-filter-controls space-y-4">
      {/* Search bar */}
      <div className="relative">
        <Search
          size={16}
          className="project-filter-icon absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
        />
        <input
          type="search"
          placeholder="Search projects, tools, or categories…"
          value={filters.search}
          onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
          className={cn(
            'project-filter-input',
            'w-full pl-11 pr-10 py-3 rounded-xl text-sm',
            'bg-white/[0.04] border border-white/[0.08]',
            'text-white placeholder-white/30',
            'focus:outline-none focus:border-[#a8ff3e]/50 focus:bg-white/[0.06]',
            'transition-all duration-200',
            'backdrop-blur-sm'
          )}
          aria-label="Search projects"
        />
        {filters.search && (
          <button
            onClick={() => onFiltersChange({ ...filters, search: '' })}
            className="project-filter-icon absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded text-white/30 hover:text-white/70 transition-colors"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Filter row */}
      <div className="project-filter-row flex flex-wrap items-center gap-3">
        <div className="project-filter-label flex items-center gap-2 text-xs text-white/40 font-medium shrink-0">
          <SlidersHorizontal size={14} />
          <span>Filter:</span>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 flex-1">
          <button
            onClick={() => onFiltersChange({ ...filters, categories: [] })}
            className={cn(
              'project-filter-chip',
              'px-3 py-1.5 rounded-lg text-xs font-medium',
              'border transition-all duration-200',
              'focus-visible:ring-2 focus-visible:ring-[#a8ff3e]',
              filters.categories.length === 0
                ? 'bg-[#a8ff3e]/15 border-[#a8ff3e]/40 text-[#a8ff3e]'
                : 'bg-white/[0.04] border-white/[0.08] text-white/50 hover:text-white hover:border-white/20'
            )}
            aria-pressed={filters.categories.length === 0}
          >
            All Projects
          </button>
          {categories.map((cat) => {
            const active = filters.categories.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={cn(
                  'project-filter-chip',
                  'px-3 py-1.5 rounded-lg text-xs font-medium',
                  'border transition-all duration-200',
                  'focus-visible:ring-2 focus-visible:ring-[#a8ff3e]',
                  active
                    ? 'bg-[#a8ff3e]/15 border-[#a8ff3e]/40 text-[#a8ff3e]'
                    : 'bg-white/[0.04] border-white/[0.08] text-white/50 hover:text-white hover:border-white/20'
                )}
                aria-pressed={active}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sort dropdown */}
        <div className="relative ml-auto shrink-0">
          <button
            onClick={() => setSortOpen((v) => !v)}
            className={cn(
              'project-sort-button',
              'flex items-center gap-2 px-3 py-1.5 rounded-lg',
              'text-xs font-medium text-white/60',
              'border border-white/[0.08] bg-white/[0.04]',
              'hover:text-white hover:border-white/20',
              'transition-all duration-200',
              sortOpen && 'border-white/20 text-white'
            )}
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
          >
            {currentSort}
            <ChevronDown
              size={12}
              className={cn('transition-transform duration-200', sortOpen && 'rotate-180')}
            />
          </button>

          {sortOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setSortOpen(false)}
                aria-hidden="true"
              />
              <div
                className={cn(
                  'project-sort-menu',
                  'absolute right-0 top-full mt-2 z-20',
                  'w-44 py-1 rounded-xl',
                  'bg-[#161616] border border-white/[0.1]',
                  'shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
                )}
                role="listbox"
                aria-label="Sort options"
              >
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      onFiltersChange({ ...filters, sort: opt.value });
                      setSortOpen(false);
                    }}
                    className={cn(
                      'project-sort-option',
                      'w-full text-left px-4 py-2.5 text-xs font-medium',
                      'transition-colors duration-150',
                      filters.sort === opt.value
                        ? 'text-[#a8ff3e] bg-[#a8ff3e]/10'
                        : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                    )}
                    role="option"
                    aria-selected={filters.sort === opt.value}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Results summary + clear */}
      <div className="flex items-center justify-between pt-1">
        <p className="project-results-count text-xs text-white/30">
          Showing <span className="project-results-highlight text-white/60 font-medium">{filteredCount}</span>
          {filteredCount !== totalCount && (
            <> of <span className="project-results-highlight text-white/60 font-medium">{totalCount}</span></>
          )}{' '}
          project{filteredCount !== 1 ? 's' : ''}
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="project-clear-all flex items-center gap-1.5 text-xs text-white/40 hover:text-[#a8ff3e] transition-colors"
          >
            <X size={12} />
            Clear all
          </button>
        )}
      </div>
    </div>
  );
}
