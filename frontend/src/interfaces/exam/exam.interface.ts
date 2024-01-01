export interface ExamListInterface {
  id: number;
  grade_num: number;
  subjects: SubjectsInterface[];
}

export interface SubjectsInterface {
  id: number;
  subject_name: string;
  BSB: BSBInterface[];
  CHSB: CHSBInterface[];
}

export interface BSBInterface {
  id: number;
  bsb_name: string;
  bsb_file: string;
}

export interface CHSBInterface {
  id: number;
  chsb_name: string;
  chsb_file: string;
}
