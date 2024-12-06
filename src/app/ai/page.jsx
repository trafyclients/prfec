import RootLayout from '@app/layout';
import PuterChat from '@components/ai/PuterChat';

export default function HomePage() {
  return (
    <RootLayout showFooter={false}>
      <PuterChat />
    </RootLayout>
  );
}
