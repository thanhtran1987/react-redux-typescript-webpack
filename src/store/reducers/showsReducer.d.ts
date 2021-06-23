/// <reference path="../../utils/SharedDefinition.d.ts"/>

// Defines the interface of the properties of ShowsAction
interface ShowsAction {
  type: string;
  resp?: {
    data: Shows;
  };
  errors?: string;
}

// Defines the interface of the properties of ShowsState
interface ShowsState {
  shows: {
    loading: boolean;
    data?: Shows;
    errors?: string;
  };
}
