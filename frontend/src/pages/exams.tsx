import { GetServerSideProps, NextPage } from "next";
import Layout from "@/layout/layout";
import {
  Card,
  Typography,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { ExamsService } from "@/services/exam.service";
import { ExamListInterface } from "@/interfaces/exam/exam.interface";
import { useRouter } from "next/router";

const ExamsPage: NextPage<ExamsPageInterface> = ({ data }) => {
  const router = useRouter();

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mt-5 mx-auto">
          <Typography
            variant={"h3"}
            color={"black"}
          >{`BSB - CHSB ro'yxatlar`}</Typography>
          <div className="flex flex-wrap mb-6 -m-4">
            {data.map((i) => (
              <div
                onClick={() => router.push(`/exams/${i.grade_num}`)}
                key={i.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
              >
                <Card className="mt-6 border">
                  <CardBody>
                    <Typography variant="h3" color="blue-gray" className="">
                      {i.grade_num} - sinf
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button>Tanlash</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExamsPage;

interface ExamsPageInterface {
  data: ExamListInterface[];
}

export const getServerSideProps: GetServerSideProps<
  ExamsPageInterface
> = async () => {
  const data = await ExamsService.getAllExams();
  return {
    props: {
      data,
    },
  };
};
