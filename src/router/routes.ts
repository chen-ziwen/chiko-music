import home from '@/views/home-page/HomePage.vue';

const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登陆',
        isLogin: true,
        keepAlive: false
    },
    component: () => import('@/views/Login.vue'),
}

const mainRouter = [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'discover' },
        meta: {
            title: '首页',
            keepAlive: true
        },
        component: home,
        children: [
            {
                path: 'discover',
                name: 'discover',
                meta: {
                    title: '发现音乐',
                    keepAlive: true,
                },
                component: () => import('@/views/discover-music/DiscoverMusic.vue')
            },
            {
                path: 'singer',
                name: 'singer',
                meta: {
                    title: '歌手',
                    keepAlive: true
                },
                component: () => import('@/views/singer/Singer.vue')
            },
            {
                path: 'singerdetails',
                name: 'singerdetails',
                meta: {
                    title: '歌手详情',
                    keepAlive: true
                },
                component: () => import('@/views/singer/SingerDetails.vue')
            },
            {
                path: 'songsheet',
                name: 'songsheet',
                meta: {
                    title: '歌单',
                    keepAlive: true
                },
                component: () => import('@/views/song-sheet/SongSheet.vue')
            },
            {
                path: 'sheetlist',
                name: 'sheetlist',
                meta: {
                    title: '歌单详情',
                    keepAlive: false,
                },
                component: () => import('@/views/song-sheet/SheetList.vue')
            },
            {
                path: 'albumlist',
                name: 'albumlist',
                meta: {
                    title: '专辑详情',
                    keepAlive: true,
                },
                component: () => import('@/views/singer/AlbumList.vue')
            },
            {
                path: 'boutiquesongsheet',
                name: 'boutiquesongsheet',
                meta: {
                    title: '精品歌单',
                    keepAlive: true,
                },
                component: () => import('@/views/song-sheet/BoutiqueSongSheet.vue')
            },
            {
                path: 'ranklist',
                name: 'ranklist',
                meta: {
                    title: '排行榜',
                    keepAlive: true
                },
                component: () => import('@/views/rank/RankList.vue')

            },
            {
                path: 'mv',
                name: 'mv',
                meta: {
                    title: 'MV',
                    keepAlive: true
                },
                component: () => import('@/views/mv/Mv.vue')
            },
            {
                path: 'mvdetail',
                name: 'mvdetail',
                meta: {
                    title: 'MV详情',
                    keepAlive: true
                },
                component: () => import('@/views/mv/MvDetail.vue')
            },
            {
                path: 'mvsort',
                name: 'mvsort',
                meta: {
                    title: 'MV分类',
                    keepAlive: true
                },
                component: () => import('@/views/mv/MvSort.vue')
            },
            {
                path: 'searchpage',
                name: 'searchpage',
                meta: {
                    title: '资源搜索',
                    keepAlive: false
                },
                component: () => import('@/views/search/SearchPage.vue')
            },
        ]
    },

]

export const routes = [loginRouter, ...mainRouter];