import React from "react";
import ChapterPlayer from "../Player/ChapterPlayer";
import Test from "../QuestionNAnswer/Test";

export default function Learning() {
  return (
    <div>
      <ChapterPlayer videoUrl="https://linkden-learning.s3.ap-south-1.amazonaws.com/videos/RN-1.mp4" />

      {/* <ChapterPlayer videoUrl="https://firebasestorage.googleapis.com/v0/b/linked-learning-project.appspot.com/o/2_Installi[…]?alt=media&token=ed5d23db-821b-4a10-9879-ab7073ef61b9" /> */}

      {/* https://dms.licdn.com/playlist/C560DAQFue-VQIxvb8A/learning-original-video-vbr-720/0/1598800469630?e=1622358000&v=beta&t=Yzi36hoGzH_w8j-Fwg-r6qzTPL__bzlyMjsf1pj-jXA */}

      {/* <ChapterPlayer videoUrl="https://drive.google.com/uc?export=download&amp;id=1bejJmI0VUwFCgcbT49_rMpqm8my0btSS" /> */}
      <Test />
    </div>
  );
}
