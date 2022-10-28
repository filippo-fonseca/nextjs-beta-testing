import { PrismaClient } from '@prisma/client';
import React from 'react';
import IssueDetails from './IssueDetails';

const IssueDetailsPage = async ({ params }) => {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findFirst({
    where: { id: +params.issueId },
  });
  return <IssueDetails issue={issue} />;
};

export default IssueDetailsPage;
