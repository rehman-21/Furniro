import { Button } from "./Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CustomCardProps {
  Title: string;
  Title2: string;
  Description?: string;
  Action?: React.ReactNode;
  Content?: string;
  Footer?: string;
}

export const CustomCard = ({
  Title,
  Title2,
  Description,
  Action,
  Content,
  Footer,
  ...props
}: CustomCardProps) => {
  return (
    <Card
      className="
        w-full sm:w-80 md:w-90 lg:w-[40%] 
        min-h-[250px] h-[350px] 
        mx-8 
        border-none bg-orange-100 
        flex flex-col justify-center
        p-5
      "
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-base md:text-lg font-poppins ">
          {Title}
        </CardTitle>
        <CardTitle className="text-2xl md:text-4xl text-[#b88e2f] font-poppins font-bold">
          {Title2}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {Description && <CardDescription>{Description}</CardDescription>}
        {Content && <p className="mt-2 text-sm md:text-base">{Content}</p>}
      </CardContent>

      <CardFooter>
        <Button
          className="
            bg-[#b88e3f] 
            w-full sm:w-[200px] 
            h-12 sm:h-[50px] 
            text-white font-bold 
            rounded-md 
            hover:bg-[#a87c2f] transition
            scale-100 
            cursor-pointer
            hover:scale-105 

          "
          children="BUY NOW"
        />
      </CardFooter>
    </Card>
  );
};
