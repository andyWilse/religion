import request from '@/service/api/index'

/**
 * 紧急事件
 */
export function undoEvents() {
	return request({
		url: 'event/undoEvents',
		method: 'get',
	});
}

/**
 * 各类教堂数量
 */
export function getAllNum() {
	return request({
		url: 'venues/getAllNum',
		method: 'get',
	});
}

/**
 * 宣传教育
 */
export function newList(params) {
	return request({
		url: `news/find`,
		method: 'get',
		params
	});
}
