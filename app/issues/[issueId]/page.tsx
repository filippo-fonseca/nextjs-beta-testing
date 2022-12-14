import { PrismaClient } from '@prisma/client';
import React from 'react';
import { wait } from '../../../util/time';
import IssueDetails from './IssueDetails';

const IssueDetailsPage = async ({ params }) => {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findFirst({
    where: { id: +params.issueId },
  });
  // await wait(3);
  if (!issue) {
    throw new Error('Issue not found!');
  }
  return <IssueDetails issue={issue} />;
};

export default IssueDetailsPage;
