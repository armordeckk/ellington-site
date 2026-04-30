"use client";

import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog-shared";
import { CATEGORY_LABELS, formatDate } from "@/lib/blog-shared";
import { useLanguage } from "./LanguageProvider";

export function BlogCard({
  post,
  priority = false,
}: {
  post: Post;
  priority?: boolean;
}) {
  const { lang } = useLanguage();
  const cat = CATEGORY_LABELS[post.category]?.[lang] ?? post.category;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-[var(--background-card)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-500 overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.cover}
          alt={post.coverAlt ?? post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-7">
        <div className="flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-muted mb-4">
          <span className="text-accent">{cat}</span>
          <span>
            {formatDate(post.publishedAt, lang)}
            {post.readingTime ? ` · ${post.readingTime} min` : ""}
          </span>
        </div>
        <h3 className="font-serif text-2xl md:text-[1.7rem] leading-[1.15] mb-3 group-hover:text-accent transition">
          {post.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
