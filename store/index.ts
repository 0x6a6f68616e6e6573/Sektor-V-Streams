export const state = () => ({
  isLoading: false,
  settings: [
    {
      name: 'Display Settings',
      icon: 'settings',
      description: 'Change the visable elements of the Site.',
      modal: 'displaySettings',
    },
    {
      name: 'Filter Settings',
      icon: 'settings',
      description: 'Edit the filters how you wish.',
      modal: 'filterSettings',
    },
  ],
  organisations: {
    Polizei: { color: 'blue', name: 'Polizei' },
    Mediziner: { color: 'red', name: 'Mediziner' },
    Taxi: { color: 'yellow', name: 'Taxi' },
    '': { color: 'green' },
  },
  isDisplayViewers: true,
  isDisplayOrgas: true,
  isDisplayOrgasDot: true,
  isDisplayOffline: true,
  filteredOrgas: [],
  filter: 'viewers',
  myList: [],
});

export const mutations = {
  START_LOADING(state: { isLoading: any }, _value: any) {
    state.isLoading = true;
  },
  STOP_LOADING(state: { isLoading: any }, _value: any) {
    state.isLoading = false;
  },
  SET_DISPLAY_VIEWERS(state: { isDisplayViewers: any }, value: any) {
    state.isDisplayViewers = value === 'true' || value === true;
  },
  SET_DISPLAY_ORGAS(state: { isDisplayOrgas: any }, value: any) {
    state.isDisplayOrgas = value === 'true' || value === true;
  },
  SET_DISPLAY_ORGAS_DOT(state: { isDisplayOrgasDot: any }, value: any) {
    state.isDisplayOrgasDot = value === 'true' || value === true;
  },
  SET_DISPLAY_OFFLINE(state: { isDisplayOffline: any }, value: any) {
    state.isDisplayOffline = value === 'true' || value === true;
  },
  SET_FILTERED_ORGAS(state: { filteredOrgas: any }, value: any) {
    state.filteredOrgas = typeof value === 'string' ? JSON.parse(value) : value;
  },
  SET_FILTER(state: { filter: any }, value: any) {
    state.filter = value;
  },
};
