export default function globalReducer(state, { type, payload }) {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "FETCHED_DATA":
      return { loading: false, data: payload, error: null };
    case "ERROR":
      return { ...state, loading: false, error: payload };
    default:
      return { ...state, loading: false };
  }
}
