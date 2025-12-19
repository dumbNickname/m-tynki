import { ParentProps } from "solid-js";
import Breadcrumbs from "./Breadcrumbs";

interface PageHeaderProps extends ParentProps {
  title: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export default function PageHeader(props: PageHeaderProps) {
  return (
    <section class="bg-gradient-to-r from-primary to-primary-hover py-16 lg:py-24">
      <div class="container-custom">
        {props.breadcrumbs && <Breadcrumbs items={props.breadcrumbs} />}
        <h1 class="text-4xl lg:text-6xl font-heading font-bold text-white">
          {props.title}
        </h1>
        {props.children}
      </div>
    </section>
  );
}
