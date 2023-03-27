import sendRequest from "../controllers/common/sendRequest";
import { guideActions } from "../slices/guideSlice";
import { showAndHideMsg } from "../slices/uiSlice";

export const getGuides = function(page) {
	return async dispatch => {
		try {
			const data = await sendRequest(`/guides?page=${page}&page_size=12`, 'GET');
			dispatch(guideActions.setGuides(data.guides));

		} catch(err) {
			console.log(err);
		}
	}
}

export const guidesByUserId = (id, page) => {
	return async dispatch => {
		try {
			const data = await sendRequest(`/guides/${id}?page=${page}&page_size=12`, 'GET');
			dispatch(guideActions.setGuides(data.guides));
		} catch(err) {
			console.log(err);
		}
	}
}

export const createGuide = function(title, content, cb) {
	return async dispatch => {
		try {
			await sendRequest('/guides', 'POST', {title, content});
			cb();
		} catch(err) {
			console.log(err);
			dispatch(showAndHideMsg('error', 'Error creating a guide'));
		}
	}
}

export const getGuideById = function(id) {
	return async dispatch => {
		try {
			const {title, content, guideId} = await sendRequest(`/guides/guide/${id}`, 'GET');
			dispatch(guideActions.setActiveGuide({title: `# ${title}`, content, guideId}));
		} catch(err) {
			console.log(err);
		}
	}
}