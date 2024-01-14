import DashIcon from '../assets/dashicon.png'
import VoteIcon from '../assets/vote.png'
import Statistcs from '../assets/statistics.png'
import ProfileSetting from '../assets/profile-setting.png'
import UploadSimple from '../assets/UploadSimple.png'
import Calendar from '../assets/CalendarCheck.png'
import Timer from '../assets/Timer.png'

export const NavbarList =[
    {
        id: '#home',
        lists: 'Home'
    },
    {
        id: '#about',
        lists: 'About'
    },
    {
        id: '#contact',
        lists: 'Contact Us'
    },
    {
        id: '#fAQS',
        lists: 'FAQS'
    },
]

export const DashList = [
    {
        id: '#dashboard',
        icons: DashIcon,
        texts: 'Dashboard'
    },
    {
        id: '#vote',
        icons: VoteIcon,
        texts: 'Vote'
    },
    {
        id: '#statistics',
        icons: Statistcs,
        texts: 'Statistics'
    },
    {
        id: '#profilesettings',
        icons: ProfileSetting,
        texts: 'Profile Setting'
    },
]
export const Polls=[
    {
        id: 1,
        label: 'Poll Title',
        placeholder: 'Type your poll title '
    },
    {
        id: 2,
        label: 'Poll Images',
        placeholder: 'Upload image ',
        upload: UploadSimple
    },
    {
        id: 3,
        label: 'Voting Type',
        placeholder: ' '
    },
]
 
export const TimeAndDateList = [
    {
        id: 1,
        label: 'Start Date',
        placeholder: 'dd /mm/yr',
        icons: Calendar,
    },
    {
        id: 2,
        label: 'Time',
        placeholder: '00:00',
        icons: Timer,
    },
    {
        id: 3,
        label: 'End Date',
        placeholder: 'dd /mm/yr',
        icons: Calendar,
    },
    {
        id: 4,
        label: 'Time',
        placeholder: '00:00',
        icons: Timer,
    },
]