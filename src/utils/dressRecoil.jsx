import {atom} from 'recoil'
import {selector} from 'recoil'

//눈사람 이미지
export const baseEyes = atom({
    key: 'baseSnowman_e',
    default: [
        {'Eye' : 0,
        'EyesVal' : 'eye_0'}
    ]
})

export const baseNose = atom({
    key: 'baseSnowman_n',
    default: [
        {'Nose' : 0,
        'NoseVal' :'nose_0'}
    ]
})

export const baseArms = atom({
    key: 'baseSnowman_a',
    default: [
        {'Arm' : 0,
        'ArmVal' :'arm_0'}
    ]
})

export const baseItem = atom({
    key: 'baseSnowman_i',
    default: [
        {'Item' : 0,
        'ItemVal' :'acc_0'}
    ]
})

export const baseHead = atom({
    key: 'baseSnowman_h',
    default: [
        {'Head' : 0,
        'HeadVal' :'head_0'}
    ]
})

export const baseMouth = atom({
    key: 'baseSnowman_m',
    default: [
        {'Mouth' : 0,
        'MouthVal' :'mouth_0'}
    ]
})


// 아이템 모달창 state
export const modalStateC = atom({
    key: 'modalC',
    default: {'modalClick': false}
})

export const modalStateT= atom({
    key: 'modalT',
    default: {'modalType' : 'head'},
})

//옷입히기->메세지 모달창
export const messageState =atom({
    key: 'msState',
    default: false,
})


//메시지 내용, 글쓴이
export const WRMessageRecoil = atom({
    key: 'message',
    defalut: {
        letter: '', 
        creater: ''
    }
})



