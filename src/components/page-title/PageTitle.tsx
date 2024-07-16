import { PageTitleProps } from "./types";

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className="ui-page-title text-2xl lg:text-3xl font-bold mb-4">
      {title}
    </h1>
  );
};

export default PageTitle;
