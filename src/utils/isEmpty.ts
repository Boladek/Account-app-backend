export default (obj: Record<string, any> ) => {
    if (obj && Object.entries(obj).length === 0) return true;
    return false;
  };