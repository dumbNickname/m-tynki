import { A } from "@solidjs/router";
import { For } from "solid-js";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" class="mb-4">
      <ol class="flex items-center gap-2 text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">
        <For each={props.items}>
          {(item, index) => (
            <li
              class="flex items-center gap-2"
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
            >
              {item.href ? (
                <>
                  <A
                    href={item.href}
                    class="text-white hover:text-accent transition-colors"
                    itemprop="item"
                  >
                    <span itemprop="name">{item.label}</span>
                  </A>
                  <meta itemprop="position" content={String(index() + 1)} />
                  {index() < props.items.length - 1 && (
                    <span class="text-white/60">»</span>
                  )}
                </>
              ) : (
                <>
                  <span class="text-accent" itemprop="name">{item.label}</span>
                  <meta itemprop="position" content={String(index() + 1)} />
                </>
              )}
            </li>
          )}
        </For>
      </ol>
    </nav>
  );
}
