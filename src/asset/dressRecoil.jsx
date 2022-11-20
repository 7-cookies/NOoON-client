import {atom} from 'recoil'

import base from '../asset/img/base.png'

//눈사람 이미지
export const baseEyes = atom({
    key: 'baseSnowman_e',
    default: [
        {'Eyes' : base,
        'EyesVal' : 'eyes_0'}
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
        'ArmsVal' :'arms_0'}
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
        {'Head' : base,
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
    key: 'modal',
    default: {'modalClick': true}
})

export const modalStateT= atom({
    key: 'modal',
    default: {'modalType' : 'head'},
})
