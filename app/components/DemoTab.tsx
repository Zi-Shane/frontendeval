import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export type CategoryListProps = Category[];

type Category = {
  name: string;
  content: JSX.Element;
};

export function DemoTab({
  categories,
  cardClassName,
}: {
  categories: CategoryListProps;
  cardClassName?: string;
}) {
  return (
    <div className="w-[100vw] flex justify-center my-20">
      <Tabs defaultValue="Demo">
        <TabsList className="lg:w-fit w-full">
          {categories.map((category, index) => (
            <TabsTrigger
              className="w-full"
              key={`tab-${index}`}
              value={category.name}
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="lg:border-t border-slate-200 border-t-0"></div>
        {categories.map((category, index) => (
          <TabsContent
            key={`content-${index}`}
            value={category.name}
            className={cn("w-[300px] lg:w-[60vw] h-[540px]", cardClassName)}
          >
            {category.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
