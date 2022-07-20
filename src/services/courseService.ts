import api from "./api";

export type EpisodeType = {
   id: number;
   name: string;
   sinopsys: string;
   order: number;
   videoUrl: string;
   secondsLong: number;
};

export type CourseType = {
   id: number;
   name: string;
   thumbnailRel: string;
   sinopsys: string;
   episodes?: EpisodeType[];
}; 

const courseService = {
   getNewestCourse: async () => {
      const res = await api.get("/courses/newest").catch((error) => {
         console.log(error.response.data.message);

         return error.response;
      });

      return res;
   },
};

export default courseService;