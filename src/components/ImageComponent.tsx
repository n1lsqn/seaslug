import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
}

export const ImageComponent: React.FC<Props> = ({ ...props }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt={props.alt}
        src={props.src}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}