import React from 'react';
import { Carousal } from './Carousal';
import { ExploreCourses } from './ExploreCourses';
import { Headline } from './Headline';

const data = [
    {
       imgUrl: "https://media-exp1.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1622365200&v=beta&t=TV_nRD5pQuGelTw9oT_Gp3I8Wm0ysC0CqGUrcN-im20",
       type: "COURSE",
       courseName: "The Single Morning Habits of High Performers",
       viewers: "3,205,339"
    },
    {
       imgUrl: "https://media-exp1.licdn.com/dms/image/C4E0DAQFlz_FMg8f0zw/learning-public-crop_144_256/0/1568668254385?e=1622372400&v=beta&t=hd4L-a1w2sbPMtvR34xoNf9r_4CFiEx6Y66Hc6-Fkdo",
       type: "COURSE",
       courseName: "The Single Morning Habits of High Performers",
       viewers: "3,205,339"
    },
    {
       imgUrl: "https://media-exp1.licdn.com/dms/image/C4E0DAQEZVh_xl-Cu_Q/learning-public-crop_144_256/0/1595287769974?e=1622372400&v=beta&t=an43G3_1V3jn-CbXZ3BJ67ryOjob0dfQDYUhcWUtsfE",
       type: "COURSE",
       courseName: "The Single Morning Habits of High Performers",
       viewers: "3,205,339"
    },
    {
       imgUrl: "https://media-exp1.licdn.com/dms/image/C4E0DAQGDyKYkqI0T4w/learning-public-crop_144_256/0/1568668819111?e=1622372400&v=beta&t=-xcTtnXCScSGtyOyoSN_txlV2qo_AuoD3nI2ZJW5WGY",
       type: "COURSE",
       courseName: "The Single Morning Habits of High Performers",
       viewers: "3,205,339"
    },
    {
       imgUrl: "https://media-exp1.licdn.com/dms/image/C4E0DAQGde-PgGw0jSw/learning-public-crop_144_256/0/1567117663418?e=1622372400&v=beta&t=IZS15Zxb7AhcMOOQ1vyRBnVpOaXzO3L1_gVgGeE3HAw",
       type: "COURSE",
       courseName: "The Single Morning Habits of High Performers",
       viewers: "3,205,339"
    },
    {
       imgUrl: "https://media-exp1.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1622365200&v=beta&t=TV_nRD5pQuGelTw9oT_Gp3I8Wm0ysC0CqGUrcN-im20",
       type: "COURSE",
       courseName: "The Single Morning Habits of High Performers",
       viewers: "3,205,339"
    },
    {
       imgUrl: "https://media-exp1.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1622365200&v=beta&t=TV_nRD5pQuGelTw9oT_Gp3I8Wm0ysC0CqGUrcN-im20",
       type: "COURSE",
       courseName: "The Single Morning Habits of High Performers",
       viewers: "3,205,339"
    },
    {
       imgUrl: "https://media-exp1.licdn.com/dms/image/C4E0DAQHTleAijeDMHg/learning-public-crop_144_256/0/1579118915835?e=1622365200&v=beta&t=TV_nRD5pQuGelTw9oT_Gp3I8Wm0ysC0CqGUrcN-im20",
       type: "COURSE",
       courseName: "The Single Morning Habits of High Performers",
       viewers: "3,205,339"
    }
]

export const Home = () => {
    return (
        <div>
            {/* <Headline /> */}
            {/* <ExploreCourses /> */}
            <Carousal data={data} trending="TRENDING COURSES" />
        </div>
    )
}
