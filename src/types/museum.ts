import React from 'react';

export interface Exhibit {
  id: number;
  code: string;
  hallId: string;
  hallName: string;
  title: string;
  date: string;
  location: string;
  category: string;
  imagePath: string;
  story: string;
  renderMock: () => React.ReactNode;
}

export interface HallSection {
  id: string;
  romanNum: string;
  title: string;
  description: string;
}

export type DetoxState = {
  1: boolean;
  2: boolean;
  3: boolean;
};
