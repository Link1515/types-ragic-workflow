export interface ApprovalParam {
  /**
   * Get root node ID of the entry.
   */
  getEntryRootNodeId(): number;

  /**
   * Gets the action of the approval. Either CREATE, APPROVE, FINISH, CANCEL, REJECT.
   */
  getApprovalAction(): ApprovalAction;
}

type ApprovalAction = 'CREATE' | 'APPROVE' | 'FINISH' | 'CANCEL' | 'REJECT';
