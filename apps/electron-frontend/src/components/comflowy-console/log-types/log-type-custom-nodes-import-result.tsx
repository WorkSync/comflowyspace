import { ComflowyConsoleLog } from "@comflowy/common/types/comflowy-console.types";
import { MessageViewer } from "../message-viewer";
import { Log } from "./log";

/**
 * Log type for custom nodes import result
 */
export function LogTypeCustomNodesImportResult({log}: {log: ComflowyConsoleLog}) {
  const importSuccessExtensions = log.data.successfulImports || [];
  const importFailedExtensions = log.data.failedImports || [];
  console.log(log);
  return (
    <Log level={importFailedExtensions.length > 0 ? "warn" : "info"} title={`Import custom nodes ${importSuccessExtensions.length} success, ${importSuccessExtensions.length} failed`} className={`log-type-custom-nodes-import-result`}>
      {importSuccessExtensions.length > 0 && <div>Successed: {importSuccessExtensions.join(", ")}</div>}
      {importFailedExtensions.length > 0 && <div>Failed: {importFailedExtensions.join(", ")}</div>}
    </Log>
  )
}