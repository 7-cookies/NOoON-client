import {atom} from 'recoil'

import base from '../asset/img/base.png'

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
        {'Nose' : base,
        'NoseVal' :'nose_0'}
    ]
})

export const baseArms = atom({
    key: 'baseSnowman_a',
    default: [
        {'Arms' : base,
        'ArmsVal' :'arm_0'}
    ]
})

export const baseItem = atom({
    key: 'baseSnowman_i',
    default: [
        {'Item' : base,
        'ItemVal' :'item_0'}
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
        {'Mouth' : base,
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
