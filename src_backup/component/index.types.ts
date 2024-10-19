import React from "react";

export type cornersType = 'sm' | 'md' | 'lg' | 'full';
export type size = number;


export type radius = 'sm' | 'md' | 'lg' | 'full';
export type lefetOrRightOrTopOrBottom = 'left' | 'right' | 'top' | 'bottom';

export type IntrinsicElementsDiv = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type CursorType =
  | 'default'
  | 'pointer'
  | 'crosshair'
  | 'text'
  | 'move'
  | 'wait'
  | 'help'
  | 'not-allowed'
  | 'progress'
  | 'context-menu'
  | 'cell'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'no-drop'
  | 'grab'
  | 'grabbing'
  | 'all-scroll'
  | 'zoom-in'
  | 'zoom-out';