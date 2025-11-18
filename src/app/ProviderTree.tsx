
import { ThemeProvider } from '@/app/providers/theme-provider';
import { StoreProvider } from '@/app/providers/store-provider';
import RootLayout from '@/pages/RootLayout';

export default function ProviderTree()
{

  return (
    <StoreProvider >
      <ThemeProvider>
        <RootLayout />
      </ThemeProvider>
    </StoreProvider>
  );
}