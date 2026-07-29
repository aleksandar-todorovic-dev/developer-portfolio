type ProjectTitleTextProps = {
  title: string;
};

export function ProjectTitleText({ title }: ProjectTitleTextProps) {
  if (title === "LifeRecompiled") {
    return (
      <>
        Life<wbr />
        Recompiled
      </>
    );
  }

  return title;
}
