import { PageInfo } from "./common"

export type ClassroomType = 'PUBLIC' | 'PRIVATE'

export type ClassroomStatus = 'ACTIVE' | 'INACTIVE' | 'ARCHIVED'

export interface Classroom {
  id: string
  name: string
  description: string
  type: ClassroomType
  status: ClassroomStatus
  instructorId: string
  instructor: Instructor
  classCode: string
  endTime: string
  thumbnailUrl: string
  bannerUrl: string
}

export interface Instructor {
  id: string
  name: string
  username: string
  avatar: string
}

export interface ClassroomPageResponse {
  getClassroomPageByInstructorId: {
    content: Classroom[];
    pageInfo: PageInfo;
  };
}
