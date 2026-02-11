import { gql } from "@apollo/client";

export const GET_CLASSROOM_PAGE = gql`
  query GetClassroomPage(
    $instructorId: ID!
    $pageable: PageableInput
  ) {
    getClassroomPageByInstructorId(
      instructorId: $instructorId
      pageable: $pageable
    ) {
      content {
        id
        name
        type
        status
        instructorId
        classCode
        endTime
        thumbnailUrl
        bannerUrl
        instructor {
          id
          name
          username
          avatar
        }
      }
      pageInfo {
        totalPages
        totalElements
        size
        number
      }
    }
  }
`;
