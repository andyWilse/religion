import request from '@/service/api/index'

/**
 * 事件数量统计
 */
export function getAllNum() {
	return request({
		url: 'event/getAllNum',
		method: 'get',
	});
}

/**
 * 预警事件台账
 */
export function getEventByType(type = 'all') {
	return request({
		url: `event/getEventByType/${type}`,
		method: 'get',
	});
}
