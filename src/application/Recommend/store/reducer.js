// 存放 initialState 和 reducer 函数
import produce from 'immer';
import * as actionTypes from './constants';

const bannerList = [1, 2, 3, 4].map((item) => {
    return {
        imageUrl:
            'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
    };
});

const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
    return {
        id: 1,
        picUrl:
            'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
        playCount: 17171122,
        name: '朴树、许巍、李健、郑钧、老狼、赵雷',
    };
});

// 默认state
const defaultState = {
    bannerList,
    recommendList,
};

// immer 处理 immutable data
const recommendReducer = produce((draft = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            draft.bannerList = action.data;
            return draft;
        case actionTypes.CHANGE_RECOMMEND_LIST:
            draft.recommendList = action.data;
            return draft;
        default: {
            return draft;
        }
    }
});
export default recommendReducer;

// const userReducer = produce((draft, action) => {
//     switch (action.type) {
//         case "renameUser":
//             // OK: we modify the current state
//             draft.users[action.payload.id].name = action.payload.name
//             return draft // same as just 'return'
//         case "loadUsers":
//             // OK: we return an entirely new state
//             return action.payload
//         case "adduser-1":
//             // NOT OK: This doesn't do change the draft nor return a new state!
//             // It doesn't modify the draft (it just redeclares it)
//             // In fact, this just doesn't do anything at all
//             draft = {users: [...draft.users, action.payload]}
//             return
//         case "adduser-2":
//             // NOT OK: modifying draft *and* returning a new state
//             draft.userCount += 1
//             return {users: [...draft.users, action.payload]}
//         case "adduser-3":
//             // OK: returning a new state. But, unnecessary complex and expensive
//             return {
//                 userCount: draft.userCount + 1,
//                 users: [...draft.users, action.payload]
//             }
//         case "adduser-4":
//             // OK: the immer way
//             draft.userCount += 1
//             draft.users.push(action.payload)
//             return
//     }
// })
