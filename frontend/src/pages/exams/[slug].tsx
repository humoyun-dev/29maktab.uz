import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import Layout from "@/layout/layout";
import { GetServerSideProps, NextPage } from "next";
import { ExamsService } from "@/services/exam.service";
import { ExamListInterface } from "@/interfaces/exam/exam.interface";
import Link from "next/link";
import api from "@/api.json";

const TABLE_HEAD = ["#", "File nomi", "state"];
const ExamsDetailPage: NextPage<ExamsDetailPageInterface> = ({
  data,
  slug,
}) => {
  const [open, setOpen] = useState<number>(1);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <Layout>
      <div className={`w-10/12 mx-auto my-16`}>
        {data
          .filter((f) => {
            return f.grade_num.toString().includes(slug);
          })
          .map((i) => (
            <div key={i.id}>
              {i.subjects.map((d) => (
                <Accordion key={d.id} open={open === d.id}>
                  <AccordionHeader onClick={() => handleOpen(d.id)}>
                    {d.subject_name}
                  </AccordionHeader>
                  <AccordionBody>
                    <Typography variant={"h4"} color={"gray"}>
                      BSB lar
                    </Typography>
                    <List>
                      <table className=" text-left">
                        <thead>
                          <tr>
                            {TABLE_HEAD.map((head) => (
                              <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                              >
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal leading-none opacity-70"
                                >
                                  {head}
                                </Typography>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {d.BSB.map((i) => (
                            <tr key={i.id} className="even:bg-blue-gray-50/50">
                              <td className="p-4 w-1/12">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {i.id}
                                </Typography>
                              </td>
                              <td className="p-4">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {i.bsb_name}
                                </Typography>
                              </td>
                              <td className="fp-4 w-2/12">
                                <Link
                                  className={`bg-orange-600 rounded-lg shadow-md text-white py-3 px-4`}
                                  href={`${api.api}/${i.bsb_file}`}
                                >
                                  Yuklab olish
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </List>
                  </AccordionBody>
                </Accordion>
              ))}
            </div>
          ))}
      </div>
    </Layout>
  );
};

interface ExamsDetailPageInterface {
  data: ExamListInterface[];
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
  ExamsDetailPageInterface
> = async ({ query }) => {
  try {
    const slug = query.slug as string;
    const data = await ExamsService.getAllExams();

    return {
      props: {
        data,
        slug,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

export default ExamsDetailPage;
