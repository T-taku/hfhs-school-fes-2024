import For_Visitor from '@/components/For_Visitor';
import Hero from '@/components/Hero';
import Important from '@/components/Important';
import Information from '@/components/Information';
import News from '@/components/News';
import PickUp from '@/components/PickUp';

export default function Home() {
  return (
    <>
      <Hero />
      <Information />
      <For_Visitor />
      <PickUp />
      <News />
    </>
  );
}
