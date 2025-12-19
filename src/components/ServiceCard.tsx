interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div class="flex flex-col items-center text-center">
        <img
          src={props.icon}
          alt=""
          class="w-16 h-16 mb-6"
          width="60"
          height="60"
        />
        <h3 class="text-xl font-heading font-semibold mb-4 text-secondary">
          {props.title}
        </h3>
        <p class="text-secondary-light leading-relaxed">
          {props.description}
        </p>
      </div>
    </div>
  );
}
