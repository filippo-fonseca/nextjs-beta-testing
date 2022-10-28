import { PrismaClient } from '@prisma/client';
import React from 'react';
import IssuesList from '../../components/issues/IssueList';
import classes from './layout.module.css';

const IssuesLayout = async ({ children }) => {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany();
  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>
        <IssuesList issues={issues} />
      </aside>
      {children}
    </div>
  );
};

export default IssuesLayout;
