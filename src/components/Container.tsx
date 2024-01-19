import useDarkMode from "../hooks/useDarkMode";
import useOnMount from "../hooks/useOnMount";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const { toggleTheme } = useDarkMode();
  useOnMount(() => {
    toggleTheme("dark");
  });

  return (
    <div className="w-screen  md:h-full  flex items-center justify-center bg-zinc-200 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 overflow-hidden">
      <main className="w-full h-[100dvh] md:h-full   max-w-screen xl:max-w-3xl xl:max-h-[95%] flex flex-col px-4 py-2 overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default Container;
