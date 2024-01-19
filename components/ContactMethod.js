import Image from "next/image";

export default function ContactMethod({ name, image }) {
  return (
    <div className="contact-method">
      <Image src={image} alt={name} className="contact-image" width={32} />
      <span className="contact-name">{name}</span>
    </div>
  );
}
